import SchemaBuilder from "schema-crafterjs";

const schema: SchemaBuilder = new SchemaBuilder();
type PayloadType = {
  email: string;
  message: string;
};
export function instantiate_schema() {
  schema.build({
    email: {
      email: [true, "Improper Email."],
      required: [true, "Email Is Required."],
    },
    message: {
      string: [true, "Message Must Be A String."],
      required: [true, "Message Is Required."],
      matches: [
        true,
        new RegExp(/^[A-Za-z0-9.:' ]*$/),
        "Message Must Only Contain Letters, Numbers, and Punctuation.",
      ],
    },
  });
}

export function validate_schema(payload: PayloadType) {
  schema.validate(payload);
}


// export function submit_formspree(payload: PayloadType) {

// }
