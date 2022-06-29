
const Archive = async (id, data, setData) => {
    let indexData = data.findIndex((function (e) {
        return e.id === Number(id)
    }))
    data[indexData]["archived"] = data[indexData]["archived"] ? false : true
    setData([...data])
}

const Delete = async (id, data, setData) => {
    let indexData = data.findIndex((function (e) {
        return e.id === Number(id)
    }))
    data.splice(indexData, 1)
    setData([...data])
}

const Create = async (formData, e, setForm,data,setData) => {
    e.preventDefault()
    const newData = [
        ...data,
        {
            id: +new Date,
            title: formData.title,
            body: formData.body,
            archived: false,
            createdAt: new Date().toISOString()
          },
    ]
    setData([...newData])
    setForm([])
}

const Search = (keyword, data, setFilteredData) => {
    const filteredData = data.filter((card) => card.title.toString().toLowerCase().search(keyword.toString().toLowerCase()) >= 0)
    setFilteredData([...filteredData])
}


module.exports = {Archive, Delete, Search, Create}
