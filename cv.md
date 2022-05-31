# Ivan Bortnik
## My Contact Info:

* **Phone:** +375 29 5749996
* **E-mail:** [Disturbe2011@yandex.ru](Disturbe2011@yandex.ru)
* **GitHub:** [Disturbed2022](https://github.com/Disturbed2022)


### About Me
I am 37 years old. I am frontend web developer.

* **My strengths:**
    * Quick learner
    * Diligence
    * Team playing
> **Keep learning...**

## Skills
* HTML
* CSS / SCSS
* JavaScript
* React / Express / Node 
* Git / GitHub
* Photoshop / Illustrator / Figma
## Code Examples
```
 async login (req,res)  {
     try{
         const {username, password} = req.body
         const user = await User.findOne({username})
         if (!user){
             return res.status(400).json({message:'Такого пользователя не существует'})
         }
         const  validPassword = bcrypt.compareSync(password, user.password)
         if (!validPassword){
             return res.status(400).json({message:'Пароль не верный'})
         }

         const token = generateAccessToken(user._id, user.role)
         return res.json({token})

     }   catch (e) {
         console.log(e)
         await res.status(400).json({message:'Что то пошло не так'})
     }
 }

```
## Education
* **IT STEP Academy**
    * Frontend development
## Languages
* **Belorussian** - native speaker.
* **Russian** - native speaker.
* **English** - A2 (B1 in process...)
