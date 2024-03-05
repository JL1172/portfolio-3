import SchemaBuilder from "schema-crafterjs";
//instantiate form schema
const schema: SchemaBuilder = new SchemaBuilder();
//create payload type
export type PayloadType = {
  email: string;
  message: string;
};
//create single concern function to instantiate schema
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
//create validation function for schema
export function validate_schema(payload: PayloadType) {
  schema.validate(payload);
}