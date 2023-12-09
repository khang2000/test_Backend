import Category from "../models/Category.js";
import Product from "../models/Product.js";
import { productValid } from "../validation/product.js";

export const getList = async (req, res) => {
  try {
    // const data = await Product.find({}).populate("categoryId");
    // const {
    //   _page = 1,
    //   _limit = 10,
    //   _sort = "createdAt",
    //   _order = "asc",
    // } = req.query;
    // const option = {
    //   page: _page,
    //   limit: _limit,
    //   sort: {
    //     [_sort]: _order === "asc" ? 1 : -1,
    //   },
    // };
    // const data = await Product.paginate({}, option);
    const data = await Product.find({});
    console.log(data);
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }
    return res.status(200).json({
      message: "Get list product Successfully!",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({ message: "Loi sever" });
  }
};

export const getDetail = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    // .populate("categoryId")
    if (!data) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }
    return res.status(200).json({
      message: "Get Product Successfully!",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({ message: "Loi sever" });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = productValid.validate(req.body);
    if (error) {
      res.status(400).json({
        message: error.details[0].message,
      });
    }
    const productCreate = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };

    if (req.file) {
      productCreate.image = req.file.originalname;
    }
    const data = await Product.create(productCreate);
    if (!data) {
      return res.status(404).json({
        message: "Cannot create product",
      });
    }
    // const updateCategory = await Category.findByIdAndUpdate(data.categoryId, {
    //   $addToSet: {
    //     products: data._id,
    //   },
    // });
    // if (!updateCategory) {
    //   return res.status(404).json({
    //     message: "Update Category not successful",
    //   });
    // }
    return res.status(200).json({
      message: "create successfully!",
      product: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { error } = productValid.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(400).json({
        message: error.details[0].message,
      });
    }
    const productUpdate = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };

    if (req.file) {
      productUpdate.image = req.file.originalname;
    }
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      productUpdate,
      {
        new: true,
      }
    );
    if (!product) {
      return res.status(404).json({
        message: "Update Product Not Successful",
      });
    }
    return res.status(200).json({
      message: "Update Product Successful",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(400).json({
        message: "Delete Product Not Successful",
      });
    }
    return res.status(200).json({
      message: "Delete Product Successful",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
