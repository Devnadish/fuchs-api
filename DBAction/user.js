import db from "../lib/prisma.js";

export const addUser = async (name, email, mobile, password) => {
  try {
    const data = await db.user.create({
      data: {
        name: name,
        email: email,

        password: password,
        profile: {
          create: {
            mobile: mobile,
          },
        },
        Car: {
          create: {
            carType: "test",
          },
        },
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
