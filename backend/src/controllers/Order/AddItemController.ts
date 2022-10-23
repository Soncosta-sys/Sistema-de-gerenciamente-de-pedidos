import { Request, Response } from "express";
import { AddItemService } from "../../services/Order/AddItemService";

class AddItemController{
    async handle(req: Request, res: Response){
        const {order_id, product_id, amount} = req.body;

        const addItem = new AddItemService();

        const order = await addItem.execute({
            product_id,
            order_id,
            amount
        });

        return res.json(order);
    }
}

export { AddItemController }