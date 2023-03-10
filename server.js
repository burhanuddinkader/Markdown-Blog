const express=require("express")
const articleRouter=require("./routes/article.js")
const app=express()

app.set("view engine","ejs")
app.use("/articles",articleRouter)
app.get('/',(req,res)=>{
    const articles=[{
        title:"Test Article 1",
        createdAt:new Date(),
        description:"Test Description 1"
    },
    {
        title:"Test Article 2",
        createdAt:new Date(),
        description:"Test Description 2"
    }]
    res.render("articles/index",{articles:articles})
})




app.listen(5000)