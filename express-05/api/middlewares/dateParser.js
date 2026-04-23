const DATE_FIELDS = ["start_date", "end_date"];

const parseBRDate = (value) => {
  if (typeof value !== "string") return value;

  const brPattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = value.match(brPattern);

  if (!match) return value;

  const [, day, month, year] = match;
  return `${year}-${month}-${day}`;
};

export const dateParser = (req, res, next) => {
  if (req.body && typeof req.body === "object") {
    DATE_FIELDS.forEach((field) => {
      if (req.body[field]) {
        req.body[field] = parseBRDate(req.body[field]);
      }
    });
  }
  next();
};
