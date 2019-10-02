import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017", {
    useNewUrlParser: true
});

async function run() {

    await client.connect();

    const todoDB = client.db("todo");
    const taskCollection = todoDB.collection("tasks");

    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/all", async (req, res) => {

        const allTasks = await taskCollection.find({}).toArray();

        console.log(allTasks);

        res.json(allTasks);
    });

    app.post("/create", async (req, res) => {
        const { id, content } = req.body;
        const result = await taskCollection.insertOne({
            id,
            content
        });
        res.json(result.ops[0]);
    });

    app.post("/remove", async (req, res) => {
        const { id } = req.body;
        const result = await taskCollection.findOneAndDelete({
            id
        });
        res.json(result.value);
    });

    app.listen(9001, "127.0.0.1", () => {
        console.log("Server is up");
    });

}

run();
