import { Router } from "express";

import { helloWorld } from "../modules/function";
import { test } from "../modules/test";

const router = Router();

router.get("/hello", helloWorld);
router.get("/test", test);

export default router;
