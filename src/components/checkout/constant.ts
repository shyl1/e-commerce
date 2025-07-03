import * as Yup from "yup";

export const validationSchema = Yup.object({
    country: Yup.string().required("Country/Region is required"),
    firstName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must not exceed 50 characters"),
    lastName: Yup.string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must not exceed 50 characters"),
    address: Yup.string()
        .required("Address is required")
        .min(5, "Address must be at least 5 characters"),
    apartment: Yup.string()
        .max(100, "Apartment details must not exceed 100 characters"),
    postalCode: Yup.string()
        .matches(/^[0-9]{5,10}$/, "Postal code must be 5-10 digits"),
    city: Yup.string()
        .required("City is required")
        .min(2, "City name must be at least 2 characters"),
});


export const fieldRows = [
    [
        {
            id: "country",
            name: "country",
            type: "text",
            placeholder: "Country/Region"
        }
    ],
    [
        {
            id: "firstName",
            name: "firstName",
            type: "text",
            placeholder: "First name (optional)"
        },
        {
            id: "lastName",
            name: "lastName",
            type: "text",
            placeholder: "Last name"
        }
    ],
    [
        {
            id: "address",
            name: "address",
            type: "text",
            placeholder: "Address"
        }
    ],
    [
        {
            id: "apartment",
            name: "apartment",
            type: "text",
            placeholder: "Apartment, suite, etc. (optional)"
        }
    ],
    [
        {
            id: "postalCode",
            name: "postalCode",
            type: "text",
            placeholder: "Postal code (optional)"
        },
        {
            id: "city",
            name: "city",
            type: "text",
            placeholder: "City"
        }
    ]
];