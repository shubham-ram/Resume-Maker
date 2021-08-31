const express  = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));

let contactDetails=[];
let internship =[];
let education=[];
let skills=[];
let objective =[];


app.get("/", function(req, res){
    res.render("index", {title: "Resume Maker"});
});

// contact detaills
app.get("/contact-details", (req, res)=>{
    res.render("form-contact", {title:"Contact Details"});
});

app.post("/contact-details", (req, res)=>{
    if(contactDetails.length !==0) {contactDetails=[];}

    contactDetails.push(req.body.firstName, req.body.lastName, req.body.email, req.body.phoneNumber, req.body.city, req.body.linkedin);
    console.log(contactDetails);

    res.redirect("/internship")
});

// internship
app.get("/internship", (req, res) =>{
    res.render("form-intern", {title:"Internship Details"});
});

app.post("/internship", (req, res)=>{
    if(internship.length !==0) internship=[];
    internship.push(
        {
            name: req.body.companyName1,
            title: req.body.jobTitle1,
            desc : req.body.responsibility1,
            start: req.body.startDate1,
            end: req.body.endDate1
        },
        {
            name: req.body.companyName2,
            title: req.body.jobTitle2,
            desc : req.body.responsibility2,
            start: req.body.startDate2,
            end: req.body.endDate2
        }, 
        {
            name: req.body.companyName3,
            title: req.body.jobTitle3,
            desc : req.body.responsibility3,
            start: req.body.startDate3,
            end: req.body.endDate3
        }
    );
    
    if(internship[2].name === "") internship.pop();
    if(internship[1].name === "") internship.pop();

    console.log(internship);
    res.redirect("/education")
});

// education
app.get("/education", (req, res) =>{
    res.render("form-edu", {title:"Education Details"});
});

app.post("/education", (req, res)=>{
    if(education.length !== 0) education=[];
    
    education.push(
        {
            name: req.body.uniName,
            degree: req.body.degree,
            course: req.body.course,
            complete: req.body.YOE1,
            marks: req.body.CGPA
        },{
            name: req.body.collegeName,
            degree: req.body.collegeDegree,
            course: req.body.stream,
            complete: req.body.YOE2,
            marks: req.body.collegePercentage
        }, {
            name: req.body.schoolName,
            degree: req.body.board,
            course:"",
            complete: req.body.YOE3,
            marks: req.body.schoolPercentage
        }
        );   

    console.log(education);
    res.redirect("/skills");
});

// skills
app.get("/skills", (req, res) =>{
    res.render("form-skill", {title:"Skills"});
});

app.post("/skills", (req, res)=>{
    if(skills.length !==0) skills=[];

    skills.push(req.body.skill1,req.body.skill2, req.body.skill3,
        req.body.skill4,req.body.skill5,req.body.skill6,
        req.body.skill7,req.body.skill8,req.body.skill9,req.body.skill10
    );
    
    skills = skills.filter(ele =>{
        return ele !== ""
    });
    console.log(skills);

    res.redirect("/objective")
});

// objective
app.get("/objective", (req, res) =>{
    res.render("form-obj", {title:"Objective"});
});

app.post("/objective", (req, res)=>{
    if(objective.length !==0 ) objective=[];
    objective.push(req.body.profession, req.body.objective);

    res.redirect("/select-template")
});


// select template
app.get("/select-template", (req, res) =>{
    res.render("select-temp", {title:"Select Template"})
})

app.get("/temp1", (req, res)=>{
    res.render("temp1", {title:"Template 1",
        contactInfo: contactDetails,
        internship: internship,
        edu: education,
        skills: skills,
        obj: objective
    });
});

app.get("/temp2", (req, res)=>{
    res.render("temp2", {title:"Template 2",
        contactInfo: contactDetails,
        internship: internship,
        edu: education,
        skills: skills,
        obj: objective
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));