import { Router } from "express";
import createUserController from "../controllers/createUserController";
import deleteUsersController from "../controllers/deleteUsersController";
import getProfileUserController from "../controllers/getProfileUserController";
import listUsersController from "../controllers/listUsersController";
import updateUsersController from "../controllers/updateUsersController";
import verifyEmailMiddleware from "../middlewares/verifyEmailMiddleware";
import verifyIdMiddleware from "../middlewares/verifyIdMiddleware";
import verifyKeysMiddleware from "../middlewares/verifyKeysMiddleware";

const router = Router();

router.post("/users", verifyEmailMiddleware,verifyKeysMiddleware, createUserController);
router.get("/users", listUsersController);
router.get("/users/:id", verifyIdMiddleware, getProfileUserController);
router.patch("/users/:id", verifyKeysMiddleware, verifyIdMiddleware, updateUsersController);
router.delete("/users/:id", verifyIdMiddleware, deleteUsersController);

export default router;
