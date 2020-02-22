import server from "../../server";

export default (req, res) => {
    if (req.method === "GET") {
        // req.firebaseServer
        //     .collection('posts')
        //     .get()
        //     .then((snapshot) => {
        //         let posts = [];

        //         snapshot.forEach((doc) => {
        //             posts.push(doc.data());
        //         });

        //         res.end(JSON.stringify({ name: 'John Doe' }))
        //     })
        //     .catch((error) => {
        //         res.json((error));
        //     });
        //res.end(JSON.stringify({ name: 'John Doe' }))
        res.status(200)
    }
    else {

    }
}