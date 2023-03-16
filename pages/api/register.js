// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default function handler(req, res) {
  axios
    .post("http://localhost:8080/", req.body)
    .then((response) => {
      if (response.status === 200) {
        res.status(200).json({ message: "Success" });
      } else res.status(505).json({ message: "Error" });
    })
    .catch((error) => {
      res.status(505).json({ message: error });
    });
}
