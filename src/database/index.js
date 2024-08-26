import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
    const connectionUrl = "mongodb+srv://eldenlord723:Ecommerce@cluster0.nzrux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
