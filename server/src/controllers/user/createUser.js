import User from "../../models/user.js";

export const createUser = async (req, res) => {
  try {
    const { fullName, placeOfBirth } = req.body;

    if (!fullName || !placeOfBirth) {
      throw new Error("Full Name and place of birth are required");
    }

    const { country, state, city } = placeOfBirth;

    if (!country || !state || !city) {
      throw new Error("Country, state and city fields are required");
    }

    const newUser = new User({
      fullName,
      placeOfBirth: {
        country,
        state,
        city,
      },
    });
    const createdUser = await newUser.save();
    res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error while creating the user" });
  }
};
