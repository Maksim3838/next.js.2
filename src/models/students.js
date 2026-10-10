import { Schema,model } from "mongoose"

const studentsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        age: {
            type: Number,
            required: true,
        },

        gender: {
            type: String,
            enum: ["male", "female"],
        },

        avgMark: {
            type: Number,
             required: true,
            
        },

        onDuty: {
            type: Boolean,
            
        },
    },
    {
        timestamps: true,
    }
);

export const Student = model("Student", studentsSchema);