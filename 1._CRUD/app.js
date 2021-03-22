const express = require ("express");
const app = express();

app.use(express.json());

/*
+--------------------------------------------------------------------------------------------------------------------------------------+
|                                                              Cat info                                                                |
+--------------------------------------------------------------------------------------------------------------------------------------+
*/

// The infos about the different cat breeds are taken from this page: https://www.purina.com/cats/cat-breeds

const cats = {
    1: {
        id: 1,
        breed: "British Shorthair",
        size: "Medium to large, with males weighing 12 to 18 pounds and females weighing 9 to 15 pounds.",
        coat: "Short, plush, dense ",
        lifespan: "12 to 17 years",
        daily_life: "The British Shorthair is an easygoing feline. She enjoys affection but isn’t needy and dislikes being carried. She’ll follow you from room to room, though, out of curiosity. British Shorthairs aren’t lap cats, but they do enjoy snuggling next to their people on the couch.",
        temperament: "As they age, British Shorthairs become increasingly sedentary, however males are often more rambunctious than the reserved females. They get along well with gentle and respectful children and don’t mind cat-friendly dogs.",
        characteristics: "British Shorthairs are round all over, with a broad chest and strong legs. Their coats are short, thick and plush. Eye color depends on coat color, but you can expect British Blues to have gold eyes and those with point coloring to have blue eyes. Other eye colors range from golden to copper.",
        colours: "Although their coats come in almost every possible color and pattern, the most popular color is blue (grey). These cats are sometimes referred to as British Blues.",
        shedding: "Your British Shorthair may experience seasonal shedding in the spring and fall, so brush regularly during those periods to remove loose hair. Outside of those seasons, weekly brushing will suffice.",
        health: "Although the breed is free from many genetic diseases that plague other breeds, British Shorthairs are susceptible to gingivitis, hypertrophic cardiomyopathy and hemophilia B. Obesity is another concern, as this cat loves to eat and leads a relatively sedentary lifestyle.",
        history: "As the oldest breed in England, the British Shorthairs are thought to have descended from domestic cats imported from Egypt, accompanying the Romans when they invaded Great Britain in 43 AD. They grew in popularity during the Victorian era, when stricter breeding standards were implemented. In the early 1900s, the British Shorthair was crossed with the Persian, introducing a longhair gene. After both World Wars, the breed was nearly extinct. Thanks to cross-breeding, British Shorthairs were revitalized. In 1967, the American Cat Association accepted the breed. It wasn’t accepted by The International Cat Association (TICA) until 1979 and the Cat Fanciers Association (CFA) a year later. The breed is now recognized by all cat associations.",
        fun_facts: "1. Two of the most famous fictional cats are British Shorthairs: Puss in Boots and the Cheshire Cat from Alice in Wonderland. 2. British Shorthairs were the only pedigreed cats exhibited at some of the earliest cat shows.",
    },

    2: {
        id: 2,
        breed: "Egyptian Mau",
        size: "Medium, with males weighing 10 to 14 pounds and females weighing 6 to 10 pounds.",
        coat: "short to medium",
        lifespan: "12 - 15 years",
        daily_life: "The Egyptian Mau is fiercely devoted to her humans and vocally shows signs of happiness and affection by meowing in a pleasant voice. She’ll also slowly swish her tail and knead with her front paws. She loves to display her hunting skills by chasing and retrieving a toy. As a moderate- to highly active breed, you may find her on top of your refrigerator or bookshelves.",
        temperament: "Egyptian Maus also love playing with water and are smart enough to learn how to turn on the faucet. Despite her high energy levels, she adores curling up in your lap for a snuggle session. She’s great with playful children and other cat-friendly pets who can keep up with her active and energetic lifestyle, though reserved and wary around unfamiliar guests.",
        characteristics: "A wedge-shaped, but soft head sits atop her muscular body. The forehead features an “M” shape, and her cheeks have “mascara” lines, all of which create a slightly “worried” look. Medium-to-large ears top the wedge-shaped head. Her spots range from small to large and vary in shape. The hind legs are longer than the front and she has small, delicate feet. Her tail is long and banded with a dark tip.",
        colours: "The Egyptian Mau’s spotted coat comes in 3 different colors: silver, bronze or smoke, which is black-tipped, pale silver fur. The breed can come in several other colors, including solid black, blue silver, blue spotted, blue smoke and solid blue, but they aren’t allowed in the show ring. In addition to their unique spots, Maus also have large, uniquely colored eyes in what many refer to as “gooseberry green”.",
        shedding: "As with most cats, Egyptian Maus shed moderately, but weekly combing removes loose hair.",
        health: "Although both pedigreed and mixed-breed cats face genetic and non-genetic health risks, responsible breeders do their best to develop healthy cats. The Egyptian Mau is a generally healthy feline, with the only predispositions for disease including urolithiasis and pyruvate kinase deficiency.",
        history: "Although the breed’s exact origins aren’t known, ancient Egyptian texts and paintings dating back to 1550 BC depict spotted cats worshipped by the Egyptians. Although the breed was recorded in Europe prior to World War II, the war nearly wiped out the Egyptian Maus. Natalie Troubetskoy, a Russian princess, was gifted a silver female kitten while living in Rome. She named her “Baba”, and when she moved to the U.S. in 1956, Baba and her two kittens tagged along. To ensure the breed’s survival, Troubetskoy developed a standard and began breeding the Egyptian Maus. The breed was recognized by the Cat Fanciers Federation in 1968, followed by the Cat Fanciers Association (CFA) in 1977 and The International Cat Association (TICA) in 1979. It’s recognized by most associations today.",
        fun_facts: "1. “Mau” is the Egyptian word for cat. 2. The Egyptian Mau is the only naturally spotted domestic cat, meaning the unique markings were not created through human manipulation. 3. Egyptian Maus are the fastest domestic housecat. They’ve been clocked running at speeds up to 30 miles per hour."
    },

    3: {
        id: 3,
        breed: "Norwegian Forest Cat",
        size: "Large, with males weighing 10 to 16 pounds and females weighing 8 to 12 pounds",
        coat: "Long, dense, glossy, smooth",
        lifespan: "14 to 16 years",
        daily_life: "The Norwegian Forest Cat is a gentle giant. They’re large and athletic, so you may find them sitting atop the highest point in your home, and they have no qualms about jumping down. Norwegian Forest Cats are fond of their family but are reserved with visitors.",
        temperament: "As a laid-back and independent breed, they don’t demand constant attention. Norwegian Forest Cats are content to simply sit in the same room with their humans and will happily entertain themselves while alone. These felines are moderately active, enjoying spurts of activity followed by long cat naps, and are happy to play in water. They get along with other dogs and cats, as well as mild-mannered children.",
        characteristics: "Their most distinguishing characteristic is their long, thick coat and large size. The Norwegian Forest Cat’s head is shaped like an inverted triangle, topped with heavily tufted medium-to-large ears. Large, almond-shaped eyes vary in color from stunning green to gold and copper. They have a large chest, muscular thighs, round paws, and a long, bushy tail.",
        colours: "The Norwegian Forest Cat’s coat comes in an array of different colors and patterns, except for color point (think Siamese).",
        shedding: "Norwegian Forest Cats shed heavily a couple times per year, so regular brushing during this time is essential to remove loose fur. During non-shedding periods, brush their long coat one to two times per week, gently combing out tangles. Baths are rarely necessary, and their nearly waterproof coat makes it almost impossible.",
        health: "Norwegian Forest Cats may be at risk for one or more of the following diseases: Glycogen storage disease IV, Hypertrophic cardiomyopathy, Polycystic kidney disease, or Retinal dysplasia",
        history: "The Norwegian Forest Cat hails from Norway and originated hundreds (or even thousands) of years ago. There’s speculation about their ancestry. They may have descended from long-haired cats from Turkey, brought back to Norway by Scandinavian warriors serving the Byzantine Empire. Or, they may be related to the Siberian cat from Russia. The large feline was first exhibited at an Oslo cat show in 1938, but World War II interrupted plans to develop the breed further. Norwegian Forest Cats were finally registered as a breed in 1977 with Europe’s Federation Internationale Feline. They were exported to the U.S. in 1979 where their popularity quickly grew. In 1987, the breed was presented to the Cat Fanciers Association and was accepted for full champion status in 1993.",
        fun_facts: "1. The breed appears in a Norwegian fairy tale, which states the Norse goddess Freya’s chariot was pulled by these six giant cats. 2. In Norway, they’re called “skogcatts”, which translates to “forest cats”. 3. The Norwegian Forest Cat has been nicknamed “Wegie”. 4. King Olaf V designated the breed the official cat of Norway.",
    },

    4: {
        id: 4,
        breed: "Siamese Cat",
        size: "Medium, with males weighing 11 to 15 pounds and females weighing 8 to 12 pounds",
        coat: "Short, fine, glossy ",
        lifespan: "11 to 15 years",
        daily_life: "Siamese Cats are incredibly social, intelligent and vocal—they’ll talk to anyone who wants to listen, and even those who don’t. They also play well with other cats, dogs and children. In fact, they thrive on companionship, so it’s a good idea to get them a playmate to interact with throughout the day. Although they’re active and curious, they also love curling up on their human’s lap or snuggling up next to them in bed.",
        temperament: "This highly intelligent feline will seek out things to occupy her mind. So if you don’t want your cat getting into mischief, give her puzzle feeders, games and more to keep her entertained.",
        characteristics: "Their point coloring isn’t the only distinguishing feature of Siamese Cats. They also have a distinct, wedge-shaped head with large, triangular ears. The Siamese have a long and slim physique, with longer hind legs and a long, thin tail. Perhaps their most stunning feature is their deep blue eyes, which are almond-shaped and slightly slanted.",
        colours: "Their distinct coloration makes Siamese Cats easily recognizable. Their point coloring, meaning their ears, feet and tails are darker than their body, can range from brown to chocolate to a blue gray and even lilac. Other point color variations include tabby and other patterns. The body is light in color and usually appears as ivory, cream and even glacial white.",
        shedding: "With a short and soft coat, you won’t notice as much shedding with a Siamese as you would with other breeds. To maintain a healthy shine, comb her coat weekly.",
        health: "Their unique head shape may increase your Siamese Cat’s risk of respiratory illnesses and periodontal disease. Some may have physical deformities, such as crossed eyes or a kinked tail, but these do not require medical attention. Later in life, they may develop other visual problems like retinal atrophy or glaucoma, in addition to heart problems and bladder stones.",
        history: "The Siamese Cat originated in Siam (now Thailand) and was not exported until the late 19th century. In 1878, U.S. President Rutherford B. Hayes and his wife received one of these exotic felines as a gift. In 1906, she was officially recognized as a breed by the Cat Fanciers Association (CFA). The Siamese has contributed to the creation of several other breeds, including Himalayan, Burmese, Balinese and more.",
        fun_facts: "1. The Siamese was one of the original breeds of pedigreed cats. 2. It was believed that when a member of the royal family in Siam died, the Siamese Cat received their soul. The cat was then moved to a temple, where she lived the rest of her life in luxury. 3. Siamese Cats have been featured in popular films like The Aristocats and Lady and the Tramp.",
    }
    
};

/*
+--------------------------------------------------------------------------------------------------------------------------------------+
|                                                              Get cats                                                                |
+--------------------------------------------------------------------------------------------------------------------------------------+
*/

//-------------------- Get all cats --------------------

/* Denne virker i browseren
app.get("/cats", (req, res) => {
    res.send(Object.values(cats));
});
*/

// Denne virker også i browseren
app.get("/cats", (req, res) => {
    res.send({ cats });
});


//-------------------- Get cat by id --------------------

app.get("/cats/:catId", (req, res) => {
    res.send(cats[req.params.catId]);
});


/*
+--------------------------------------------------------------------------------------------------------------------------------------+
|                                                             Post cats                                                                |
+--------------------------------------------------------------------------------------------------------------------------------------+
*/

app.post("/cats", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body });
});


/*
+--------------------------------------------------------------------------------------------------------------------------------------+
|                                                            Patch cats                                                                |
+--------------------------------------------------------------------------------------------------------------------------------------+
*/

app.patch("/cats/:catId", (req, res) => {
    res.send(cats[req.params.catId]);
});


/*
+--------------------------------------------------------------------------------------------------------------------------------------+
|                                                            Delete cats                                                               |
+--------------------------------------------------------------------------------------------------------------------------------------+
*/

app.delete("/cats/:catId", (req, res) => {
    res.send(cats[req.params.catId]);
});


/*
+--------------------------------------------------------------------------------------------------------------------------------------+
|                                                            Server start                                                              |
+--------------------------------------------------------------------------------------------------------------------------------------+
*/

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});