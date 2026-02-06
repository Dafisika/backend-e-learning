import express from "express";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";
import tutorRoutes from "./tutorRoutes.js";
import categoryClassRoutes from "./categoryClassRoutes.js";
import classRoutes from "./classRoutes.js";
import myClassRoutes from "./myClassRoutes.js";
import paymentRoutes from "./paymentRoutes.js";
import orderRoutes from "./orderRoutes.js";
import moduleRoutes from "./moduleRoutes.js";
import videoRoutes from "./videoRoutes.js";
import summaryRoutes from "./summaryRoutes.js";
import quizRoutes from "./quizRoutes.js";
import quizItemRoutes from "./quizItemRoutes.js";
import answeredQuizRoutes from "./answeredQuizRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);

router.use("/users", userRoutes);

router.use("/tutor", tutorRoutes);

router.use("/category-class", categoryClassRoutes);

router.use("/class", classRoutes);

router.use("/myClass", myClassRoutes);

router.use("payment", paymentRoutes);

router.use("/order", orderRoutes);

router.use("/module", moduleRoutes);

router.use("/video", videoRoutes);

router.use("/summary", summaryRoutes);

router.use("/quiz", quizRoutes);

router.use("/quizItem", quizItemRoutes);

router.use("/answeredQuiz", answeredQuizRoutes);

export default router;
