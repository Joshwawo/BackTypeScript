import { UserRegister } from "../interfaces/userRegister";
import NewUserModel from "../models/NewUser";
import generateRandomId from "../utils/randomId";
import generateJWT from "../utils/generateJWT";

const registerNewUserService = async (body: UserRegister) => {
  try {
    const { email } = body;

    const alreadyExist = await NewUserModel.findOne({ email });

    //Comprobar si el usuario existe y retornar un error para el controlador

    if (alreadyExist) {
      const error = new Error("User already exist");
      return error;
    }

    const newUser = new NewUserModel(body);
    newUser.token = generateRandomId();

    const newUserSave = await newUser.save();
    return newUserSave;
  } catch (error) {
    console.log(error);
  }
};

const authService = async (body: UserRegister) => {
  const { email, password } = body;

  //Comprobar si el usuario existe
  const user = await NewUserModel.findOne({ email });
  if (!user) {
    const error = new Error("User does not exist");
    return error;
  }

  //Comprobar si el usuario esta comprobado
  if (!user.confirmado) {
    const error = new Error("User not confirmed");
    return error;
  }

  //Comprobar si el password es correcto
  if (await user.comprobarPassword(password)) {
    const token = {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    };
    return token;
  } else {
    const error = new Error("Incorrect password");
    return error;
  }
};

const confirmAccount = async (token: string) => {
  const confirmUser = await NewUserModel.findOne({ token });
  if (!confirmUser) {
    const error = new Error("invalid token");
    return error;
  }

  try {
    confirmUser.confirmado = true;
    confirmUser.token = "";

    await confirmUser.save();

    return true;
  } catch (error) {
    console.log(error);
  }
};

const forgotPasswordService = async (email: string) => {
  const user = await NewUserModel.findOne({ email });
  if (!user) {
    const error = new Error("User does not exist");
    return error;
  }

  try {
    user.token = generateRandomId();
    await user.save();
    return true;
  } catch (error) {
    console.log(error);
  }
};

const compareTokenService = async (token: string) => {
  const user = await NewUserModel.findOne({ token });
  if (!user) {
    const error = new Error("invalid token");
    return error;
  }

  return true;
};

const newPasswordService = async (token: string, password: string) => {
  const user = await NewUserModel.findOne({ token });
  if (!user) {
    const error = new Error("invalid token");
    return error;
  }

  try {
    user.token = "";
    user.password = password;
    await user.save();
    return true;
  } catch (error) {
    console.log(error);
  }
}

export {
  registerNewUserService,
  authService,
  confirmAccount,
  forgotPasswordService,
  compareTokenService,
  newPasswordService,
};
