import {Router, Request, Response} from 'express'

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/Product/CreateProductController';

import uploadConfig from './config/multer'
import multer from 'multer';
import { ListByCategoryController } from './controllers/Product/ListByCategoryController';
import { CreateOrderController } from './controllers/Order/CreateOrderController';
import { RemoveOrderController } from './controllers/Order/RemoveOrderController';
import { AddItemController } from './controllers/Order/AddItemController';
import { RemoveItemController } from './controllers/Order/RemoveItemController';
import { SendOrderController } from './controllers/Order/SendOrderController';
import { ListOrdersController } from './controllers/Order/ListOrdersController';
import { DetailOrderController } from './controllers/Order/DetailOrderController';
import { FinishOrderController } from './controllers/Order/FinishOrderController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

//-- ROTAS CATEGORY --
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

//-- ROTAS PRODUCT --
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

//-- ROTAS ORDER --
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

router.put('/order/send', isAuthenticated, new SendOrderController().handle)

router.get('/orders', isAuthenticated, new ListOrdersController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)

export {router}