
import BookScheme from "../models/books.js"


export const getItems = async (req, res) => {
    const data = await BookScheme.find({});
    res.send({ data });
};

export const getItem = async (req,res) =>{
    const id = req.params.id;
    const data = await BookScheme.findOne({ _id: id}).exec();
    res.send({ data });
};

export const createItem = async(req,res) =>{
    const body = req.body;
    console.log(body);
    const data = await BookScheme.create(body);  
    res.send({data});
};

export const deleteItem = async (req,res) => {
    const id = req.params.id;
    await BookScheme.findByIdAndDelete(id).exec();
    res.send({ message: "Item delete succefull" });

};

export const updateItem = async (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    const updateBook = await BookScheme.findByIdAndUpdate(id, body, {
        new: true,
    }).exec();
    res.send({ updateBook });
};