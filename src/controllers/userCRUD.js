import User from "../models/User";
import { signUpValidator } from "../validation/user";

export const getAllUser = async (req, res) => {
  try {
    const data = await User.find({});
    console.log(data);
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy người dùng",
      });
    }
    data.password = undefined;
    return res.status(200).json({
      message: "lấy danh sách người dùng thành công",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi Server" });
  }
};

export const getDetailUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findById({ _id: id });
    if (!data) {
      return res.status(404).json({
        message: "Không tìm thấy người dùng",
      });
    }
    data.password = undefined;
    return res.status(200).json({
      message: "Lấy người dùng thành công",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi Server" });
  }
};

export const updateUser = async (req, res) => {
  console.log(req.file);

  try {
    const { error } = signUpValidator.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(400).json({
        message: error.details[0].message,
      });
    }
    const userToUpdate = {
      userName: req.body.userName,
      position: req.body.position,
      id_number: req.body.id_number,
      birthday: req.body.birthday,
      addressBorn: req.body.addressBorn,
    };

    if (req.file) {
      userToUpdate.image = req.file.originalname;
    }

    const user = await User.findByIdAndUpdate(req.params.id, userToUpdate, {
      new: true,
    });
    console.log(user);
    if (!user) {
      return res.status(404).json({
        message: "Cập nhật người dùng không thành công",
      });
    }
    user.password = undefined;
    return res.status(200).json({
      message: "Cập nhật người dùng thành công",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(400).json({
        message: "Xóa người dùng không thành công",
      });
    }

    return res.status(200).json({
      message: "xóa người dùng thành công",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
