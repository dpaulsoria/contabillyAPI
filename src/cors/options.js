const whitelist = [
    "http://localhost:8080",
    "https://myapp.co"
];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido"));
    }
  },
};

module.exports = options;
