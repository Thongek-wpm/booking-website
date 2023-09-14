import Express from "express";

const router = Express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this's auth end-point");
});

router.get("/register", (req, res) => {
  res.send("Hello, this's register end-point");
});

export default router;
