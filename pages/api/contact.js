import {
  emailValidation,
  phoneNumberValidation,
} from "../../shared/utils/validation";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let form = {
      errors: { name: "", email: "", number: "", select: "" },
      message: "",
      status: "",
    };

    const userName = req.body.name;
    if (userName.trim() === "") {
      form = {
        ...form,
        errors: { ...form.errors, name: "Molim Vas da popunite polje." },
      };
    }

    const userEmail = req.body.email;
    if (userEmail.trim() === "") {
      form = {
        ...form,
        errors: { ...form.errors, email: "Molim Vas da popunite polje." },
      };
    } else if (!emailValidation(userEmail)) {
      form = {
        ...form,
        errors: { ...form.errors, email: "Adresa e-poste je neispravna." },
      };
    }

    const userNumber = req.body.number;

    if (userNumber.trim() === "") {
      form = {
        ...form,
        errors: { ...form.errors, number: "Molim Vas da popunite polje." },
      };
    } else if (!phoneNumberValidation(userNumber)) {
      form = {
        ...form,
        errors: { ...form.errors, number: "Broj telefona je neispravan." },
      };
    }

    const userSelect = req.body.select;
    if (userSelect === "subject") {
      form = {
        ...form,
        errors: { ...form.errors, select: "Molim Vas da izaberete temu." },
      };
    }

    form.errors.name ||
    form.errors.email ||
    form.errors.number ||
    form.errors.select
      ? (form = {
          ...form,
          status: "error",
          message:
            "Došlo je do greške prilikom provere. Molimo Vas da proverite polja i ponovo pošaljite poruku.",
        })
      : (form = {
          ...form,
          status: "success",
          message: "Vaša poruka je uspešno poslata. Hvala.",
        });
    res.json(form);
  }
};

export default handler;
