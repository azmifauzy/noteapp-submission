import React, {useState} from 'react'

const Form = ({onCreate}) => {
const [form, setForm] = useState([])
const handleChange = (e) => {
    const {value, name} = e.target
    if(name === "body" || (name === "title" && value.length <= 50)) {
        setForm({
            ...form, 
            [name]:value
        })
    }
}

  return (
    <>
        <div className="note-input">
                <form onSubmit={(e) => onCreate(form, e, setForm)}>
                <p className="note-input__title__char-limit">Sisa karakter: {form.title ? 50 - form.title.length : 50}</p>
                <input
                    className="note-input__title"
                    type="text"
                    name="title"
                    placeholder="Masukkan judul catatan"
                    required
                    value={form.title || ""}
                    onChange={handleChange}
                />
                <textarea
                    className="note-input__body"
                    type="text"
                    name="body"
                    placeholder="Masukkan deskripsi catatan"
                    required
                    value={form.body || ""}
                    onChange={handleChange}
                ></textarea>
                <button type="submit">Buat</button>
                </form>
        </div>
    </>
  )
}

export default Form