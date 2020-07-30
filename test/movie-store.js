const movieStore = [
        {
            "id": 1,
            "movie_db_id": 272,
            "movie_title": "Batman Begins",
            "release_date": "2005-06-10T04:00:00.000Z",
            "average_rating": "7.7",
            "genre": "Action",
            "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
            "img": "https://image.tmdb.org/t/p/w500//lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg"
        },
        {
            "id": 2,
            "movie_db_id": 268,
            "movie_title": "Batman",
            "release_date": "1989-06-23T04:00:00.000Z",
            "average_rating": "7.2",
            "genre": "Action",
            "overview": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gothams underworld.",
            "img": "https://image.tmdb.org/t/p/w500//rBN6GPKUDZ6ZKAQiEZegZ0DZb6V.jpg"
        },
        {
            "id": 3,
            "movie_db_id": 364,
            "movie_title": "Batman Returns",
            "release_date": "1992-06-19T04:00:00.000Z",
            "average_rating": "6.8",
            "genre": "Action",
            "overview": "Having defeated the Joker, Batman now faces the Penguin—a warped and deformed individual who is intent on being accepted into Gotham society, with the help of Max Schreck, a crooked businessman, whom he coerces into helping him run for the position of Mayor of Gotham, while they both attempt to frame Batman in a different light. Batman must attempt to clear his name, all while also deciding just what must be done with the mysterious Catwoman slinking about.",
            "img": "https://image.tmdb.org/t/p/w500//moYfd709S8xnb8Od2yeG5VBt9Bp.jpg"
        },
        {
            "id": 4,
            "movie_db_id": 415,
            "movie_title": "Batman & Robin",
            "release_date": "1997-06-20T04:00:00.000Z",
            "average_rating": "4.3",
            "genre": "Action",
            "overview": "Along with crime-fighting partner Robin and new recruit Batgirl, Batman battles the dual threat of frosty genius Mr. Freeze and homicidal horticulturalist Poison Ivy. Freeze plans to put Gotham City on ice, while Ivy tries to drive a wedge between the dynamic duo.",
            "img": "https://image.tmdb.org/t/p/w500//9kC0SpgjUVJU04Gx9ae5aIDyG8.jpg"
        },
        {
            "id": 5,
            "movie_db_id": 2661,
            "movie_title": "Batman",
            "release_date": "1966-07-30T04:00:00.000Z",
            "average_rating": "6.2",
            "genre": "Adventure",
            "overview": "The Dynamic Duo faces four super-villains who plan to hold the world for ransom with the help of a secret invention that instantly dehydrates people.",
            "img": "https://image.tmdb.org/t/p/w500//gwXMBVAsLvNcZuzWDEswexdqNLa.jpg"
        },
        {
            "id": 6,
            "movie_db_id": 251519,
            "movie_title": "Son of Batman",
            "release_date": "2014-05-13T04:00:00.000Z",
            "average_rating": "6.9",
            "genre": "Action",
            "overview": "Batman learns that he has a violent, unruly pre-teen son with Talia al Ghul named Damian Wayne who is secretly being raised by Ras al Ghul and the League of Assassins. When Ras al Ghul apparently dies after a battle with Deathstroke, Batman must work to stop his long-lost son from taking revenge and guiding him to a righteous path, in addition to the chance for the pair to truly acknowledging each other as family.",
            "img": "https://image.tmdb.org/t/p/w500//rSjFHjE4cCO1eCQ3VN7VRu6ZYqh.jpg"
        },
        {
            "id": 7,
            "movie_db_id": 414,
            "movie_title": "Batman Forever",
            "release_date": "1995-06-16T04:00:00.000Z",
            "average_rating": "5.3",
            "genre": "Action",
            "overview": "The Dark Knight of Gotham City confronts a dastardly duo: Two-Face and the Riddler. Formerly District Attorney Harvey Dent, Two-Face believes Batman caused the courtroom accident which left him disfigured on one side. And Edward Nygma, computer-genius and former employee of millionaire Bruce Wayne, is out to get the philanthropist; as The Riddler. Former circus acrobat Dick Grayson, his family killed by Two-Face, becomes Waynes ward and Batmans new partner Robin.",
            "img": "https://image.tmdb.org/t/p/w500//snlu32RmjldF9b068UURJg8sQtn.jpg"
        },
        {
            "id": 8,
            "movie_db_id": 537056,
            "movie_title": "Batman: Hush",
            "release_date": "2019-07-19T04:00:00.000Z",
            "average_rating": "6.9",
            "genre": "Action",
            "overview": "A mysterious new villain known only as Hush uses a gallery of villains to destroy Batmans crime-fighting career as well as Bruce Waynes personal life, which has been further complicated by a  relationship with Selina Kyle/Catwoman.",
            "img": "https://image.tmdb.org/t/p/w500//eevJuYAitUe6VwFN29aFwzeyeTr.jpg"
        },
        {
            "id": 9,
            "movie_db_id": 321528,
            "movie_title": "Batman vs. Robin",
            "release_date": "2015-04-14T04:00:00.000Z",
            "average_rating": "7",
            "genre": "Action",
            "overview": "Damian Wayne is having a hard time coping with his fathers no killing rule. Meanwhile, Gotham is going through hell with threats such as the insane Dollmaker, and the secretive Court of Owls.",
            "img": "https://image.tmdb.org/t/p/w500//r7JUBp8WyadE6AljspzF6mo5hmP.jpg"
        },
        {
            "id": 10,
            "movie_db_id": 408648,
            "movie_title": "Batman and Harley Quinn",
            "release_date": "2017-08-14T04:00:00.000Z",
            "average_rating": "6.1",
            "genre": "Adventure",
            "overview": "Batman and Nightwing are forced to team with the Jokers sometimes-girlfriend Harley Quinn to stop a global threat brought about by Poison Ivy and Jason Woodrue, the Floronic Man.",
            "img": "https://image.tmdb.org/t/p/w500//2JVnUtyUKbQm165cXUF9r5iVPDo.jpg"
        },
        {
            "id": 11,
            "movie_db_id": 209112,
            "movie_title": "Batman v Superman: Dawn of Justice",
            "release_date": "2016-03-23T04:00:00.000Z",
            "average_rating": "5.8",
            "genre": "Action",
            "overview": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
            "img": "https://image.tmdb.org/t/p/w500//doiUtOHzcxXFl0GVQ2n8Ay6Pirx.jpg"
        },
        {
            "id": 13,
            "movie_db_id": 366924,
            "movie_title": "Batman: Bad Blood",
            "release_date": "2016-03-22T04:00:00.000Z",
            "average_rating": "7",
            "genre": "Action",
            "overview": "Bruce Wayne is missing. Alfred covers for him while Nightwing and Robin patrol Gotham City in his stead. And a new player, Batwoman, investigates Batmans disappearance.",
            "img": "https://image.tmdb.org/t/p/w500//cjgQ0RUdAhzykPZycigoQlmaKlx.jpg"
        },
        {
            "id": 14,
            "movie_db_id": 324849,
            "movie_title": "The Lego Batman Movie",
            "release_date": "2017-02-08T05:00:00.000Z",
            "average_rating": "7.2",
            "genre": "Action",
            "overview": "In the irreverent spirit of fun that made The Lego Movie a worldwide phenomenon, the self-described leading man of that ensemble—Lego Batman—stars in his own big-screen adventure. But there are big changes brewing in Gotham, and if he wants to save the city from The Joker’s hostile takeover, Batman may have to drop the lone vigilante thing, try to work with others and maybe, just maybe, learn to lighten up.",
            "img": "https://image.tmdb.org/t/p/w500//jqnbac3oind5VOcAN0mTXyapOGh.jpg"
        },
        {
            "id": 12,
            "movie_db_id": 456348,
            "movie_title": "Batman & Bill",
            "release_date": "2017-05-06T04:00:00.000Z",
            "average_rating": "7.8",
            "genre": "Documentary",
            "overview": "Everyone thinks that Bob Kane created Batman, but that’s not the whole truth. One author makes it his crusade to make it known that Bill Finger, a struggling writer, actually helped invent the iconic superhero, from concept to costume to the very character we all know and love. Bruce Wayne may be Batman’s secret identity, but his creator was always a true mystery.",
            "img": "https://image.tmdb.org/t/p/w500//u82RurwuuaHlnv0SWEpSSK8T7a8.jpg"
        },
        {
            "id": 15,
            "movie_db_id": 382322,
            "movie_title": "Batman: The Killing Joke",
            "release_date": "2016-07-24T04:00:00.000Z",
            "average_rating": "6.5",
            "genre": "Action",
            "overview": "As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.",
            "img": "https://image.tmdb.org/t/p/w500//wNyhtxSazhYVSG1So8zgGTqVFVo.jpg"
        },
        {
            "id": 17,
            "movie_db_id": 20077,
            "movie_title": "The Batman vs. Dracula",
            "release_date": "2005-10-18T04:00:00.000Z",
            "average_rating": "6.4",
            "genre": "Action",
            "overview": "Gotham City is terrorized not only by recent escapees Joker and Penguin, but by the original creature of the night, Dracula! Can Batman stop the ruthless vampire before he turns everyone in the city, including The Caped Crusader, Joker and Penguin, into his mindless minions$1",
            "img": "https://image.tmdb.org/t/p/w500//mkRHL1q50bx6uqTXa37DXdgeYvV.jpg"
        },
        {
            "id": 18,
            "movie_db_id": 464882,
            "movie_title": "Batman vs. Two-Face",
            "release_date": "2017-11-14T05:00:00.000Z",
            "average_rating": "6.3",
            "genre": "Action",
            "overview": "Former Gotham City District Attorney Harvey Dent, one side of his face scarred by acid, goes on a crime spree based on the number 2. All of his actions are decided by the flip of a defaced, two-headed silver dollar.",
            "img": "https://image.tmdb.org/t/p/w500//olwINcffzDRt8MMCamlptD3Hbjj.jpg"
        },
        {
            "id": 19,
            "movie_db_id": 13851,
            "movie_title": "Batman: Gotham Knight",
            "release_date": "2008-07-08T04:00:00.000Z",
            "average_rating": "6.7",
            "genre": "Animation",
            "overview": "Explore Bruce Waynes transition from his beginning as a tormented vigilantee to The Dark Knight of a crumbling metropolis with six distinct chapters but intended to be viewed as a whole.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 16,
            "movie_db_id": 414906,
            "movie_title": "The Batman",
            "release_date": "2021-09-30T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Action",
            "overview": "The plot is unknown.",
            "img": "https://image.tmdb.org/t/p/w500//eyZB1w6lmG6dKqGWFOviMcG0hwA.jpg"
        },
        {
            "id": 59,
            "movie_db_id": 39440,
            "movie_title": "Waiting for Superman",
            "release_date": "2010-09-24T04:00:00.000Z",
            "average_rating": "7",
            "genre": "Documentary",
            "overview": "Gripping, heartbreaking, and ultimately hopeful, Waiting for Superman is an impassioned indictment of the American school system from An Inconvenient Truth director Davis Guggenheim.",
            "img": "https://image.tmdb.org/t/p/w500//goi1QB29rJ5lUYdgS4tk5xXWZn0.jpg"
        },
        {
            "id": 20,
            "movie_db_id": 69735,
            "movie_title": "Batman: Year One",
            "release_date": "2011-09-27T04:00:00.000Z",
            "average_rating": "7.2",
            "genre": "Action",
            "overview": "Two men come to Gotham City: Bruce Wayne after years abroad feeding his lifelong obsession for justice and Jim Gordon after being too honest a cop with the wrong people elsewhere. After learning painful lessons about the citys corruption on its streets and police department respectively, this pair learn how to fight back their own way. With that, Gothams evildoers from top to bottom are terrorized by the mysterious Batman and the equally heroic Gordon is assigned to catch him by comrades who both hate and fear him themselves. In the ensuing manhunt, both find much in common as the seeds of an unexpected friendship are laid with additional friends and rivals helping to start the legend.",
            "img": "https://image.tmdb.org/t/p/w500//bNMw3onveTYU7PpLQRK0HQK8JRb.jpg"
        },
        {
            "id": 41,
            "movie_db_id": 427867,
            "movie_title": "His Bogus Boast",
            "release_date": "1917-03-10T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Comedy",
            "overview": "The gentlemen of a fashionable social club become annoyed when their guest, Ben, has their wives entranced with stories of his bravery battling outlaws in the wild west. They decide to teach him a lesson by having a club worker disguise himself with a bear skin rug and sneak up on Ben.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 42,
            "movie_db_id": 597393,
            "movie_title": "Boasting",
            "release_date": "1973-07-11T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Animation",
            "overview": "This film combines elements from Iranian epics, street wit and humor, and is in fact an animation of what Sadeghi considers his main artistic inspiration, namely Iranian folklore and storytelling screens.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 43,
            "movie_db_id": 614566,
            "movie_title": "The Boaster",
            "release_date": "1926-12-14T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Comedy",
            "overview": "",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 44,
            "movie_db_id": 1924,
            "movie_title": "Superman",
            "release_date": "1978-12-13T05:00:00.000Z",
            "average_rating": "7.1",
            "genre": "Action",
            "overview": "Mild-mannered Clark Kent works as a reporter at the Daily Planet alongside his crush, Lois Lane. Clark must summon his superhero alter-ego when the nefarious Lex Luthor launches a plan to take over the world.",
            "img": "https://image.tmdb.org/t/p/w500//hiclOcGxgP00KdMbEbA9qDywrDK.jpg"
        },
        {
            "id": 45,
            "movie_db_id": 618355,
            "movie_title": "Superman: Red Son",
            "release_date": "2020-02-24T05:00:00.000Z",
            "average_rating": "7.4",
            "genre": "Action",
            "overview": "Set in the thick of the Cold War, Red Son introduces us to a Superman who landed in the USSR during the 1950s and grows up to become a Soviet symbol that fights for the preservation of Stalin’s brand of communism.",
            "img": "https://image.tmdb.org/t/p/w500//uehwVV9xuALZ2SXeHGiX4Ay5dR7.jpg"
        },
        {
            "id": 46,
            "movie_db_id": 1452,
            "movie_title": "Superman Returns",
            "release_date": "2006-06-28T04:00:00.000Z",
            "average_rating": "5.6",
            "genre": "Science fiction",
            "overview": "Superman returns to discover his 5-year absence has allowed Lex Luthor to walk free, and that those he was closest to felt abandoned and have moved on. Luthor plots his ultimate revenge that could see millions killed and change the face of the planet forever, as well as ridding himself of the Man of Steel.",
            "img": "https://image.tmdb.org/t/p/w500//kfxzAcxk5ZGGFVdeVbMTQVLV3nK.jpg"
        },
        {
            "id": 47,
            "movie_db_id": 8536,
            "movie_title": "Superman II",
            "release_date": "1980-12-04T05:00:00.000Z",
            "average_rating": "6.7",
            "genre": "Science fiction",
            "overview": "Three escaped criminals from the planet Krypton test the Man of Steels mettle. Led by General Zod, the Kryptonians take control of the White House and partner with Lex Luthor to destroy Superman and rule the world. But Superman, who attempts to make himself human in order to get closer to Lois, realizes he has a responsibility to save the planet.",
            "img": "https://image.tmdb.org/t/p/w500//nzs2vnuYolB2dSdX9N8GZ7sz1kP.jpg"
        },
        {
            "id": 48,
            "movie_db_id": 9531,
            "movie_title": "Superman III",
            "release_date": "1983-06-17T04:00:00.000Z",
            "average_rating": "5.4",
            "genre": "Action",
            "overview": "Aiming to defeat the Man of Steel, wealthy executive Ross Webster hires bumbling but brilliant Gus Gorman to develop synthetic kryptonite, which yields some unexpected psychological effects in the third installment of the 1980s Superman franchise. Between rekindling romance with his high school sweetheart and saving himself, Superman must contend with a powerful supercomputer.",
            "img": "https://image.tmdb.org/t/p/w500//qvBt5JJKX3rnmAU3CIZOGrOaq8m.jpg"
        },
        {
            "id": 49,
            "movie_db_id": 13640,
            "movie_title": "Superman: Doomsday",
            "release_date": "2007-09-18T04:00:00.000Z",
            "average_rating": "6.6",
            "genre": "Action",
            "overview": "When LexCorps accidentally unleash a murderous creature, Doomsday, Superman meets his greatest challenge as a champion. Based on the The Death of Superman storyline that appeared in DC Comics publications in the 1990s",
            "img": "https://image.tmdb.org/t/p/w500//zO1nXPpmJylWVHg2eL00HysZqE5.jpg"
        },
        {
            "id": 51,
            "movie_db_id": 166076,
            "movie_title": "Superman: Unbound",
            "release_date": "2013-04-23T04:00:00.000Z",
            "average_rating": "6.5",
            "genre": "Action",
            "overview": "Based on the Geoff Johns/Gary Frank 2008 release Superman: Brainiac, Superman: Unbound finds the horrific force responsible for the destruction of Krypton (Brainiac) descending upon Earth. Brainiac has crossed the universe, collecting cities from interesting planets, Kandor included, and now the all-knowing, ever-evolving android has his sights fixed on Metropolis. Superman must summon all of his physical and intellectual resources to protect his city, the love of his life, and his newly-arrived cousin, Supergirl.",
            "img": "https://image.tmdb.org/t/p/w500//iepqCJMc5MIVrHbkMbkxppSithj.jpg"
        },
        {
            "id": 52,
            "movie_db_id": 45162,
            "movie_title": "Superman/Batman: Apocalypse",
            "release_date": "2010-09-28T04:00:00.000Z",
            "average_rating": "7",
            "genre": "Action",
            "overview": "Batman discovers a mysterious teen-aged girl with superhuman powers and a connection to Superman. When the girl comes to the attention of Darkseid, the evil overlord of Apokolips, events take a decidedly dangerous turn.",
            "img": "https://image.tmdb.org/t/p/w500//74H4XXU0q22TSrkPmlqkcWoX5ZZ.jpg"
        },
        {
            "id": 53,
            "movie_db_id": 487670,
            "movie_title": "The Death of Superman",
            "release_date": "2018-07-24T04:00:00.000Z",
            "average_rating": "7.4",
            "genre": "Action",
            "overview": "When a hulking monster arrives on Earth and begins a mindless rampage, the Justice League is quickly called in to stop it. But it soon becomes apparent that only Superman can stand against the monstrosity.",
            "img": "https://image.tmdb.org/t/p/w500//wA1eufMEvM0RdQk24gj5yaDWLjQ.jpg"
        },
        {
            "id": 54,
            "movie_db_id": 103269,
            "movie_title": "Superman vs. The Elite",
            "release_date": "2012-06-12T04:00:00.000Z",
            "average_rating": "6.7",
            "genre": "Action",
            "overview": "The Man of Steel finds himself outshone by a new team of ruthless superheroes who hold his idealism in contempt.",
            "img": "https://image.tmdb.org/t/p/w500//eALawIrwWsIbTJdYWipvpmdS6sS.jpg"
        },
        {
            "id": 55,
            "movie_db_id": 22855,
            "movie_title": "Superman/Batman: Public Enemies",
            "release_date": "2009-09-29T04:00:00.000Z",
            "average_rating": "6.8",
            "genre": "Action",
            "overview": "United States President Lex Luthor uses the oncoming trajectory of a Kryptonite meteor to frame Superman and declare a $1 billion bounty on the heads of the Man of Steel and his ‘partner in crime’, Batman. Heroes and villains alike launch a relentless pursuit of Superman and Batman, who must unite—and recruit help—to try and stave off the action-packed onslaught, stop the meteor Luthors plot.",
            "img": "https://image.tmdb.org/t/p/w500//2GIA8FKNxI69RnytQquoDbrAJ7L.jpg"
        },
        {
            "id": 56,
            "movie_db_id": 56590,
            "movie_title": "All Star Superman",
            "release_date": "2011-02-22T05:00:00.000Z",
            "average_rating": "6.8",
            "genre": "Action",
            "overview": "Lex Luthor enacts his plan to rid the world of Superman, once and for all. Succeeding with solar radiation poisoning, the Man of Steel is slowly dying. With what little times remains, the Last Son of Krypton must confront the revealing of his secret identity to Lois Lane and face Luthor in a final battle.",
            "img": "https://image.tmdb.org/t/p/w500//FTpFec420ztDa6HSpwLxGuwzis.jpg"
        },
        {
            "id": 57,
            "movie_db_id": 630656,
            "movie_title": "The Death and Return of Superman",
            "release_date": "2019-10-01T04:00:00.000Z",
            "average_rating": "7.3",
            "genre": "Action",
            "overview": "The Death of Superman and Reign of the Supermen now presented as an over two-hour unabridged and seamless animated feature. Witness the no-holds-barred battle between the Justice League and an unstoppable alien force known only as Doomsday, a battle that only Superman can finish and will forever change the face of Metropolis.",
            "img": "https://image.tmdb.org/t/p/w500//c3BQUy9AENkdd8us6OaB8GGBHc8.jpg"
        },
        {
            "id": 58,
            "movie_db_id": 19323,
            "movie_title": "Superman: Brainiac Attacks",
            "release_date": "2006-06-20T04:00:00.000Z",
            "average_rating": "5.8",
            "genre": "Animation",
            "overview": "Embittered by Supermans heroic successes and soaring popularity, Lex Luthor forms a dangerous alliance with the powerful computer/villain Brainiac. Using advanced weaponry and a special strain of Kryptonite harvested from the far reaches of outer space, Luthor specifically redesigns Brainiac to defeat the Man of Steel.",
            "img": "https://image.tmdb.org/t/p/w500//rarv0b3OyhG2y9qltGogtlVGk6b.jpg"
        },
        {
            "id": 60,
            "movie_db_id": 634767,
            "movie_title": "St. Louis Superman",
            "release_date": "2019-02-20T05:00:00.000Z",
            "average_rating": "6.7",
            "genre": "Documentary",
            "overview": "Bruce Franks Jr. is a 34-year-old battle rapper, Ferguson activist and state representative from St. Louis, Missouri. Known as Superman to his constituents, he is a political figure the likes of which youve never seen - full of contradictions and deep insights, who has overcome unspeakable loss to become one of the most exciting and unapologetic young leaders in the country. This short verité documentary follows Bruce at a critical juncture in his life, when he is forced to deal with the mental trauma hes been carrying for the nearly 30 years since his 9-year-old brother was shot and killed in front of him, in order to find peace and truly fulfill his destiny as a leader for his community.",
            "img": "https://image.tmdb.org/t/p/w500//bmRWHmg3QnjiKz01lTr2fqKuIOt.jpg"
        },
        {
            "id": 61,
            "movie_db_id": 11411,
            "movie_title": "Superman IV: The Quest for Peace",
            "release_date": "1987-07-23T04:00:00.000Z",
            "average_rating": "4.4",
            "genre": "Action",
            "overview": "With global superpowers engaged in an increasingly hostile arms race, Superman leads a crusade to rid the world of nuclear weapons. But Lex Luthor, recently sprung from jail, is declaring war on the Man of Steel and his quest to save the planet. Using a strand of Supermans hair, Luthor synthesizes a powerful ally known as Nuclear Man and ignites an epic battle spanning Earth and space.",
            "img": "https://image.tmdb.org/t/p/w500//spFSZBt83uruCwedMN8HR2uFklI.jpg"
        },
        {
            "id": 63,
            "movie_db_id": 618354,
            "movie_title": "Superman: Man of Tomorrow",
            "release_date": "2020-08-06T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Action",
            "overview": "An original story following the adventures of a young Superman.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 62,
            "movie_db_id": 124305,
            "movie_title": "Superman: Red Son",
            "release_date": "2009-07-30T04:00:00.000Z",
            "average_rating": "8.9",
            "genre": "Western",
            "overview": "In Red Son, Supermans rocket ship lands on a Ukrainian collective farm rather than in Kansas, an implied reason being a small time difference (a handful of hours) from the original timeline, meaning Earths rotation placed the Ukraine in the ships path instead of Kansas. Instead of fighting for ...truth, justice, and the American Way, Superman is described in Soviet radio broadcasts ...as the Champion of the common worker who fights a never-ending battle for Stalin, socialism, and the international expansion of the Warsaw Pact. His secret identity (i.e. the name his adoptive parents gave him) is a state secret.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 303,
            "movie_db_id": 292081,
            "movie_title": "Sunshine Superman",
            "release_date": "2015-05-22T04:00:00.000Z",
            "average_rating": "7.4",
            "genre": "Documentary",
            "overview": "Documentary portrait of Carl Boenish, the father of the BASE jumping movement, whose early passion for skydiving led him to ever more spectacular -and dangerous- feats of foot-launched human flight.",
            "img": "https://image.tmdb.org/t/p/w500//fpOSe6l5F5n4y4c4QQC24WHEC4c.jpg"
        },
        {
            "id": 504,
            "movie_db_id": 335988,
            "movie_title": "Transformers: The Last Knight",
            "release_date": "2017-06-16T04:00:00.000Z",
            "average_rating": "6",
            "genre": "Action",
            "overview": "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.",
            "img": "https://image.tmdb.org/t/p/w500//1n00NlOGRFZVs8coBxyZLm5l4EC.jpg"
        },
        {
            "id": 505,
            "movie_db_id": 91314,
            "movie_title": "Transformers: Age of Extinction",
            "release_date": "2014-06-25T04:00:00.000Z",
            "average_rating": "5.8",
            "genre": "Science fiction",
            "overview": "As humanity picks up the pieces, following the conclusion of Transformers: Dark of the Moon, Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.",
            "img": "https://image.tmdb.org/t/p/w500//alItugxBbjNC10ezLSisplhSKJ.jpg"
        },
        {
            "id": 506,
            "movie_db_id": 25565,
            "movie_title": "Transformers: Beginnings",
            "release_date": "2006-10-16T04:00:00.000Z",
            "average_rating": "6.8",
            "genre": "Action",
            "overview": "On their home planet of Cybertron, the Autobots and Decepticons are involved in an explosive battle over the coveted AllSpark. With the fate of the universe at stake, the Autobots send it far from the reaches of the ruthless Megatron, leader of the Decepticons. But there are even more surprises in store when it crash-lands on Earth.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 507,
            "movie_db_id": 1858,
            "movie_title": "Transformers",
            "release_date": "2007-06-27T04:00:00.000Z",
            "average_rating": "6.7",
            "genre": "Adventure",
            "overview": "Young teenager, Sam Witwicky becomes involved in the ancient struggle between two extraterrestrial factions of transforming robots – the heroic Autobots and the evil Decepticons. Sam holds the clue to unimaginable power and the Decepticons will stop at nothing to retrieve it.",
            "img": "https://image.tmdb.org/t/p/w500//77P56ZcL8M9Cw7FIptMIGjhNJoj.jpg"
        },
        {
            "id": 508,
            "movie_db_id": 1857,
            "movie_title": "The Transformers: The Movie",
            "release_date": "1986-08-08T04:00:00.000Z",
            "average_rating": "7",
            "genre": "Animation",
            "overview": "The Autobots must stop a colossal planet-consuming robot who goes after the Autobot Matrix of Leadership. At the same time, they must defend themselves against an all-out attack from the Decepticons.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 509,
            "movie_db_id": 8373,
            "movie_title": "Transformers: Revenge of the Fallen",
            "release_date": "2009-06-19T04:00:00.000Z",
            "average_rating": "6.1",
            "genre": "Action",
            "overview": "Sam Witwicky leaves the Autobots behind for a normal life. But when his mind is filled with cryptic symbols, the Decepticons target him and he is dragged back into the Transformers war.",
            "img": "https://image.tmdb.org/t/p/w500//2Ox06OTGwqkonBnYno1v8IudOga.jpg"
        },
        {
            "id": 510,
            "movie_db_id": 268092,
            "movie_title": "Transformers Prime Beast Hunters: Predacons Rising",
            "release_date": "2013-10-04T04:00:00.000Z",
            "average_rating": "7.7",
            "genre": "Action",
            "overview": "A resurrected Unicron has taken over the now-lifeless body of Megatron to seek vengeance on the Autobots and ultimately, the destruction of Cybertron.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 511,
            "movie_db_id": 38356,
            "movie_title": "Transformers: Dark of the Moon",
            "release_date": "2011-06-28T04:00:00.000Z",
            "average_rating": "6.1",
            "genre": "Action",
            "overview": "Sam Witwicky takes his first tenuous steps into adulthood while remaining a reluctant human ally of Autobot-leader Optimus Prime. The film centers around the space race between the USSR and the USA, suggesting there was a hidden Transformers role in it all that remains one of the planets most dangerous secrets.",
            "img": "https://image.tmdb.org/t/p/w500//k6gUa0v8dgYI79OrdiwKVW7AdzL.jpg"
        },
        {
            "id": 512,
            "movie_db_id": 521494,
            "movie_title": "Transformers: Titans Return",
            "release_date": "2017-11-14T05:00:00.000Z",
            "average_rating": "6",
            "genre": "Adventure",
            "overview": "After the Combiner Wars ended, Cybertron started to be rebuilt. However, an undead Starscream has been reincarnated as Trypticon, wreaking havoc around him. To combat this menace, Windblade gathers up a ragtag team of Transformers, including Optimus Prime and Megatron, to resurrect an ancient ally. And while some may be forever changed by the events, others may not emerge with their sparks intact.",
            "img": "https://image.tmdb.org/t/p/w500//y71J24BNl00V1CMJeFJEljKMk5i.jpg"
        },
        {
            "id": 513,
            "movie_db_id": 71914,
            "movie_title": "Transformers: The Return Of Optimus Prime",
            "release_date": "1987-11-17T05:00:00.000Z",
            "average_rating": "7",
            "genre": "Action",
            "overview": "When Scientists discover Sun Spores, an alien plague that instills a hatred so overwhelming that anyone infected wont stop until everything in their path is destroyed. Soon, the scientists decide that its time to rid the Earth of the Transformers and plan to use Optimus Primes lifeless body to lure every Transformer to their lab and infect them with the Sun Spores. When the Sun Spores outbreak rages out of control, the universes only hope is to revive Optimus Prime. But even if Optimus recovers, he and his Autobots will need to rely on Galvatron and the remnants of his Decepticons to help reclaim the Autobot Matrix of Leadership from an infected Rodimus Prime and use it to unleash a new Golden Age of Cybertron.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 514,
            "movie_db_id": 414740,
            "movie_title": "Transformers: Combiner Wars",
            "release_date": "2016-08-02T04:00:00.000Z",
            "average_rating": "6.4",
            "genre": "Animation",
            "overview": "Several decades after the Great War between the Autobots and the Decepticons on Earth, the two factions have disbanded and a three member ruling council rules in place of the absent leaders Optimus Prime and Megatron. An uneasy peace has been created on Cybertron, but the rise of the Combiners threatens to bring it to an end.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 515,
            "movie_db_id": 552159,
            "movie_title": "Transformers - Guerra por Cybertron",
            "release_date": "2010-06-22T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "",
            "img": "https://image.tmdb.org/t/p/w500//dzemNcMvvUlbQ0opJcgSNDXeim8.jpg"
        },
        {
            "id": 516,
            "movie_db_id": 447518,
            "movie_title": "Transformers: The Ride - 3D",
            "release_date": "2012-01-01T05:00:00.000Z",
            "average_rating": "6",
            "genre": "Adventure",
            "overview": "The Autobots attempt to defend the Allspark from Megatron and the Decepticons.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 517,
            "movie_db_id": 380452,
            "movie_title": "Transformers Rescue Bots: Dinobots!",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "Compilation of Dinobots Episodes",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 518,
            "movie_db_id": 535401,
            "movie_title": "Transformers: Power of the Primes",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "8.7",
            "genre": "Western",
            "overview": "In the aftermath of the Titans conflict that concluded into Optimus Primes death, the rest of the Transformers must stand together in order to stop Megatronus from wiping out their species forever. During their search for the Requiem Blaster, more mysteries about Cybertron’s past will be uncovered, and a new Prime will be chosen",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 520,
            "movie_db_id": 667538,
            "movie_title": "Untitled Transformers Project (1)",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "Plot Unknown.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 522,
            "movie_db_id": 698687,
            "movie_title": "Untitled Animated Transformers Prequel",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Animation",
            "overview": "An origin story set on Cybertron, home of both the Autobots and the Decepticons. The film is said to focus on the relationship between Optimus Prime and Megatron.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 521,
            "movie_db_id": 667539,
            "movie_title": "Untitled Transformers Project (2)",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "Plot Unknown.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 544,
            "movie_db_id": 557,
            "movie_title": "Spider-Man",
            "release_date": "2002-05-01T04:00:00.000Z",
            "average_rating": "7.1",
            "genre": "Action",
            "overview": "After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers to become the Amazing superhero known as Spider-Man.",
            "img": "https://image.tmdb.org/t/p/w500//vugNEFkYXrR6yjr6ZoawnHNyCmu.jpg"
        },
        {
            "id": 546,
            "movie_db_id": 559,
            "movie_title": "Spider-Man 3",
            "release_date": "2007-05-01T04:00:00.000Z",
            "average_rating": "6.2",
            "genre": "Action",
            "overview": "The seemingly invincible Spider-Man goes up against an all-new crop of villains—including the shape-shifting Sandman. While Spider-Man’s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.",
            "img": "https://image.tmdb.org/t/p/w500//nVSkePSFsZNcMJsp8IOQVmHhyG1.jpg"
        },
        {
            "id": 548,
            "movie_db_id": 1930,
            "movie_title": "The Amazing Spider-Man",
            "release_date": "2012-06-23T04:00:00.000Z",
            "average_rating": "6.5",
            "genre": "Action",
            "overview": "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his fathers former partner. As Spider-Man is set on a collision course with Connors alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
            "img": "https://image.tmdb.org/t/p/w500//aMqSuMYZ9L3wOPq19vbb5FEv2Uf.jpg"
        },
        {
            "id": 550,
            "movie_db_id": 112679,
            "movie_title": "Italian Spiderman",
            "release_date": "2007-11-08T05:00:00.000Z",
            "average_rating": "7.7",
            "genre": "Action",
            "overview": "This is an Australian-made parody of Italian action–adventure films of the 60s and 70s. and foreign movies that misappropriated popular American superheroes such as the Japanese TV series “Spider-Man”. This is an Italian take on the comic book superhero Spider-Man.",
            "img": "https://image.tmdb.org/t/p/w500//uZRQgumqHdVqnaflAsJqu8NzjEA.jpg"
        },
        {
            "id": 552,
            "movie_db_id": 324857,
            "movie_title": "Spider-Man: Into the Spider-Verse",
            "release_date": "2018-12-06T05:00:00.000Z",
            "average_rating": "8.4",
            "genre": "Action",
            "overview": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson Kingpin Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
            "img": "https://image.tmdb.org/t/p/w500//uUiId6cG32JSRI6RyBQSvQtLjz2.jpg"
        },
        {
            "id": 554,
            "movie_db_id": 68658,
            "movie_title": "Spiderman",
            "release_date": "1990-01-01T05:00:00.000Z",
            "average_rating": "6.8",
            "genre": "Western",
            "overview": "",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 557,
            "movie_db_id": 225914,
            "movie_title": "The Amazing Spider-Man",
            "release_date": "1977-09-14T04:00:00.000Z",
            "average_rating": "5.2",
            "genre": "Action",
            "overview": "When an extortionist threatens to force a multi-suicide unless a huge ransom is paid, only Peter Parker can stop him with his new powers as Spider-Man.",
            "img": "https://image.tmdb.org/t/p/w500//enl5lG2fnaC1jaPjjCBfKUao12j.jpg"
        },
        {
            "id": 560,
            "movie_db_id": 445033,
            "movie_title": "Spider-Man",
            "release_date": "1969-01-01T05:00:00.000Z",
            "average_rating": "6.8",
            "genre": "Action",
            "overview": "Spider-man must rescue the beautiful daughter of the evil Dr. Lightning.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1585,
            "movie_db_id": 9714,
            "movie_title": "Home Alone 3",
            "release_date": "1997-12-12T05:00:00.000Z",
            "average_rating": "5.2",
            "genre": "Comedy",
            "overview": "9-year-old Alex Pruitt is home alone with the chicken pox. Turns out, due to a mix-up among nefarious spies, Alex was given a toy car concealing a top-secret microchip. Now Alex must fend off the spies as they try break into his house to get it back.",
            "img": "https://image.tmdb.org/t/p/w500//gNaAgmeuSUkxb2FFCHw8fvIqHlS.jpg"
        },
        {
            "id": 1586,
            "movie_db_id": 134375,
            "movie_title": "Home Alone: The Holiday Heist",
            "release_date": "2012-11-25T05:00:00.000Z",
            "average_rating": "5",
            "genre": "Comedy",
            "overview": "8-year-old Finn is terrified to learn his family is relocating from sunny California to Maine in the scariest house he has ever seen! Convinced that his new house is haunted, Finn sets up a series of elaborate traps to catch the “ghost” in action. Left home alone with his sister while their parents are stranded across town, Finn’s traps catch a new target – a group of thieves who have targeted Finn’s house.",
            "img": "https://image.tmdb.org/t/p/w500//lN6Y7iPVIZXnGAjUSOTE64TZIxa.jpg"
        },
        {
            "id": 1588,
            "movie_db_id": 252171,
            "movie_title": "A Girl Walks Home Alone at Night",
            "release_date": "2014-01-19T05:00:00.000Z",
            "average_rating": "6.9",
            "genre": "Horror",
            "overview": "In the Iranian ghost-town Bad City, a place that reeks of death and loneliness, the townspeople are unaware they are being stalked by a lonesome vampire.",
            "img": "https://image.tmdb.org/t/p/w500//zhXV4pBNbHpMd5Otk4dNY2FRvvY.jpg"
        },
        {
            "id": 1590,
            "movie_db_id": 654974,
            "movie_title": "Untitled Home Alone Reboot",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Family",
            "overview": "A married couple tries to steal back a valuable heirloom from a troublesome kid.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1592,
            "movie_db_id": 654994,
            "movie_title": "Home Alone Again with the Google Assistant",
            "release_date": "2018-12-19T05:00:00.000Z",
            "average_rating": "7",
            "genre": "Comedy",
            "overview": "Macaulay Culkin reprises his role as Kevin McCallister in a comedic remake of the classic film. Catch up with a now 38-year-old McAllister and revisit iconic scenes with a tech twist.",
            "img": "https://image.tmdb.org/t/p/w500//vTZDXe52iIxGdfJO0Thc5NFcf3T.jpg"
        },
        {
            "id": 1594,
            "movie_db_id": 692073,
            "movie_title": "A Magician Home Alone",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "Zach King recreates classic scenes of Home Alone with a magical twist.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1597,
            "movie_db_id": 588087,
            "movie_title": "A Girl Walks Home Alone at Night",
            "release_date": "2011-12-31T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Horror",
            "overview": "A girl walks home alone at night and a man follows her with insidious intentions, but when he gets to her apartment, she turns the tables in the most surprising way…with her fangs.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1602,
            "movie_db_id": 319125,
            "movie_title": "Home Alone Mice",
            "release_date": "1931-01-18T05:00:00.000Z",
            "average_rating": "5",
            "genre": "Animation",
            "overview": "Japanese cat vs. mouse animation.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2633,
            "movie_db_id": 459110,
            "movie_title": "The Transformers: More Than Meets The Eye",
            "release_date": "1984-09-17T04:00:00.000Z",
            "average_rating": "9",
            "genre": "Animation",
            "overview": "The Autobots are running low on Energon, they leave their home planet of Cybertron to search for more sources. The Decepticons follow them and attack the Autobots ship. The ship crashes on Earth and ends up inside a volcano. Millions of years later, Teletran One, the ships computer activates and revives them. The Decepticons are determined to exploit Earths resources for their own needs. The Autobots are just as determined to stop them.",
            "img": "https://image.tmdb.org/t/p/w500//lFWVnUrszGbyZ05uv8hxrBFk30I.jpg"
        },
        {
            "id": 3294,
            "movie_db_id": 660330,
            "movie_title": "Night Shift",
            "release_date": "2020-05-14T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Drama",
            "overview": "Based on a novel by Hugo Boris, Night Shift focuses on three Parisian police officers charged with driving a stranger back to the border. However, Virginie (Efira) realizes their prisoner will most likely be killed upon return to his country and so goes about attempting to convince her fellow officers to release him.",
            "img": "https://image.tmdb.org/t/p/w500//24KAd9xcp5hA5d2yGQ6HgjPlsiY.jpg"
        },
        {
            "id": 3301,
            "movie_db_id": 11825,
            "movie_title": "Police Academy 5: Assignment Miami Beach",
            "release_date": "1988-03-17T05:00:00.000Z",
            "average_rating": "5.1",
            "genre": "Comedy",
            "overview": "The Police Academy misfits travel to Miami, Florida for their academys commanding officer, Lassard, to receive a prestigious lifetime award pending his retirement, which takes a turn involving a group of jewel thieves after their stolen loot that Lassard unknowingly has in his possession.",
            "img": "https://image.tmdb.org/t/p/w500//uvtHnSgJuNGp1PhW4lae9ncGb0U.jpg"
        },
        {
            "id": 523,
            "movie_db_id": 397697,
            "movie_title": "Transformers Rescue Bots Mystery Rescue",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "Compilation of Transformers Rescue Bots Mystery Episodes",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 545,
            "movie_db_id": 315635,
            "movie_title": "Spider-Man: Homecoming",
            "release_date": "2017-07-05T04:00:00.000Z",
            "average_rating": "7.4",
            "genre": "Action",
            "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
            "img": "https://image.tmdb.org/t/p/w500//vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg"
        },
        {
            "id": 547,
            "movie_db_id": 429617,
            "movie_title": "Spider-Man: Far from Home",
            "release_date": "2019-06-28T04:00:00.000Z",
            "average_rating": "7.5",
            "genre": "Action",
            "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
            "img": "https://image.tmdb.org/t/p/w500//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg"
        },
        {
            "id": 549,
            "movie_db_id": 634649,
            "movie_title": "Untitled Spider-Man 3",
            "release_date": "2021-11-04T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Action",
            "overview": "Sony Pictures Entertainment and The Walt Disney Company jointly announced that Marvel Studios and its President Kevin Feige will produce the third film in the Spider-Man: Homecoming series, starring Tom Holland. The film is scheduled to release on July 16, 2021.\r The third film will see Peter Parker deal with the aftermath of Quentin Beck outing him as Spider-man, but also to deal with a familiar old foe who has joined a group of Sinister Six villains.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 551,
            "movie_db_id": 558,
            "movie_title": "Spider-Man 2",
            "release_date": "2004-06-25T04:00:00.000Z",
            "average_rating": "7",
            "genre": "Action",
            "overview": "Peter Parker is going through a major identity crisis. Burned out from being Spider-Man, he decides to shelve his superhero alter ego, which leaves the city suffering in the wake of carnage left by the evil Doc Ock. In the meantime, Parker still cant act on his feelings for Mary Jane Watson, a girl hes loved since childhood.",
            "img": "https://image.tmdb.org/t/p/w500//6al048Lat3eLVQOuKtc9h6Tu94d.jpg"
        },
        {
            "id": 553,
            "movie_db_id": 102382,
            "movie_title": "The Amazing Spider-Man 2",
            "release_date": "2014-04-16T04:00:00.000Z",
            "average_rating": "6.4",
            "genre": "Action",
            "overview": "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
            "img": "https://image.tmdb.org/t/p/w500//rF3kAqk08zGSvs8m6hRwsi28nHg.jpg"
        },
        {
            "id": 558,
            "movie_db_id": 638684,
            "movie_title": "Desi Spiderman",
            "release_date": "2010-02-10T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Action",
            "overview": "A bizarre Spiderman film set in Ghaziabad, India.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 563,
            "movie_db_id": 467037,
            "movie_title": "Jack Black: Spider-Man",
            "release_date": "2002-06-06T04:00:00.000Z",
            "average_rating": "7.6",
            "genre": "Comedy",
            "overview": "",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1596,
            "movie_db_id": 635274,
            "movie_title": "Home Alone, Baby Blue",
            "release_date": "2018-11-26T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "Upon entering his family home hes haunted by fragments of a tortured past. Within the trappings of this house he begins to unravel the trappings of his mind. With every move he comes closer and closer to finding himself once more.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1599,
            "movie_db_id": 103844,
            "movie_title": "My Sisters Kids Home Alone",
            "release_date": "2012-02-02T05:00:00.000Z",
            "average_rating": "6.1",
            "genre": "Comedy",
            "overview": "",
            "img": "https://image.tmdb.org/t/p/w500//3YJC8VLyqCP5Ynck53lP2hPOkBO.jpg"
        },
        {
            "id": 2652,
            "movie_db_id": 242643,
            "movie_title": "Batman: Assault on Arkham",
            "release_date": "2014-08-12T04:00:00.000Z",
            "average_rating": "7.3",
            "genre": "Action",
            "overview": "Based on the hit video game series, Batman must find a bomb planted by the Joker while dealing with a mysterious team of villains called the Suicide Squad.",
            "img": "https://image.tmdb.org/t/p/w500//bAM1hVZEQRo1ZujryQ47bOtxEe8.jpg"
        },
        {
            "id": 3295,
            "movie_db_id": 11546,
            "movie_title": "Police Academy: Mission to Moscow",
            "release_date": "1994-06-09T04:00:00.000Z",
            "average_rating": "4.4",
            "genre": "Comedy",
            "overview": "The Russians need help in dealing with the Mafia and so they seek help with the veterans of the Police Academy. They head off to Moscow, in order to find evidence against Konstantin Konali, who marketed a computer game that everyone in the world is playing.",
            "img": "https://image.tmdb.org/t/p/w500//jutetQGSU0ttiskMNKvQUSd0PSB.jpg"
        },
        {
            "id": 3305,
            "movie_db_id": 34690,
            "movie_title": "The Police: Certifiable",
            "release_date": "2008-11-11T05:00:00.000Z",
            "average_rating": "6.5",
            "genre": "Music",
            "overview": "Concert film of The Police during the 2007-08 reunion tour. Movieed in concert in Buenos Aires at the beginning of December 2007, it’s released on the band’s original label, A&amp;M, via Universal. Movieing the Argentinian leg of the band’s momentous reunion tour, the album captures the three piece in concert, crammed with every hit from ‘Message in a Bottle’, ‘Walking on the Moon’, ‘Dont Stand So Close to Me’, ‘Every Little Thing She Does Is Magic’, ‘Wrapped Around Your Finger’, ‘Cant Stand Losing You’, ‘Roxanne’ and ‘Every Breath You Take’, closing with the punk urgency of the first track from their 1978 debut, ‘Next to You’.",
            "img": "https://image.tmdb.org/t/p/w500//hyWcRJiPhYPKM2jIiqtk1ZE6PMy.jpg"
        },
        {
            "id": 555,
            "movie_db_id": 172799,
            "movie_title": "Spider-Man vs. Doc Ock",
            "release_date": "2004-11-03T05:00:00.000Z",
            "average_rating": "7",
            "genre": "Western",
            "overview": "Doctor Octavius was a brilliant scientist working on a revolutionary new invention until a laboratory accident fused a set of mechanical arms to his body and turned him into the dreaded supervillain Doctor Octopus. Now Doc Ock seeks his revenge on those who did him wrong, and there are only two men who can put an end to his plan of destruction - Spider-Man or his secret alter-ego, Peter Parker.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 559,
            "movie_db_id": 50410,
            "movie_title": "Spider-Man: The Venom Saga",
            "release_date": "1994-06-07T04:00:00.000Z",
            "average_rating": "7.3",
            "genre": "Animation",
            "overview": "A space-shuttle crash-landing puts the famous web-slinger Spider-Man in contact with a living alien substance that bonds to his suit and enhances his super-powers. Unfortunately, the alien substance begins to change him and he feels the pull of evil, so discards the suit. The evil attaches itself to another host leading to an epic confrontation between good and evil.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1600,
            "movie_db_id": 420823,
            "movie_title": "Home Alone on Halloween",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "A girl feels uneasy on Halloween.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2911,
            "movie_db_id": 15805,
            "movie_title": "Batman & Mr. Freeze: SubZero",
            "release_date": "1998-02-11T05:00:00.000Z",
            "average_rating": "6.9",
            "genre": "Action",
            "overview": "When a desperate Mr. Freeze, to save his dying wife, kidnaps Barbara Gordon (Batgirl) as an involuntary organ donor, Batman and Robin must find her before the operation can begin.",
            "img": "https://image.tmdb.org/t/p/w500//3jU5X8XkrD6ue8jiCRIrVMPv2ah.jpg"
        },
        {
            "id": 3300,
            "movie_db_id": 10587,
            "movie_title": "Police Academy 4: Citizens on Patrol",
            "release_date": "1987-04-02T05:00:00.000Z",
            "average_rating": "5.3",
            "genre": "Comedy",
            "overview": "A new batch of recruits arrives at Police Academy, this time a group of civilian volunteers who have joined Commandant Lassards new Citizens on Patrol program. Although the community relations project has strong governmental support, a disgusted Captain Harris is determined to see it fail.",
            "img": "https://image.tmdb.org/t/p/w500//lpDsEuIl6zDpB3SIjLXKqjnTKim.jpg"
        },
        {
            "id": 3306,
            "movie_db_id": 37136,
            "movie_title": "The Naked Gun: From the Files of Police Squad!",
            "release_date": "1988-12-02T05:00:00.000Z",
            "average_rating": "7.2",
            "genre": "Comedy",
            "overview": "When the incompetent Officer Frank Drebin seeks the ruthless killer of his partner, he stumbles upon an attempt to assassinate Queen Elizabeth.",
            "img": "https://image.tmdb.org/t/p/w500//4jEtYARsVUJHJhLgsuY4iLINHQG.jpg"
        },
        {
            "id": 556,
            "movie_db_id": 148918,
            "movie_title": "Superman, Spiderman or Batman",
            "release_date": "2011-06-01T04:00:00.000Z",
            "average_rating": "8.2",
            "genre": "Drama",
            "overview": "Aron, a 5-year-old boy, sets together with his worried father on a journey at the end of which he wishes, like the superheroes in the comic books, to save his mother suffering from a heart condition.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 562,
            "movie_db_id": 569094,
            "movie_title": "Spider-Man: Into the Spider-Verse Sequel",
            "release_date": "2022-10-06T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Action",
            "overview": "A sequel to Spider-Man: Into the Spider Verse.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1603,
            "movie_db_id": 303111,
            "movie_title": "The Wubbulous World of Dr. Seuss: The Cats Home but Not Alone",
            "release_date": "2006-01-24T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "The Wubbulous World of Dr. Seuss: The Cats Home But Not Alone is a fantastic introduction to this series as the Cat in the Hat gives a tour of his home and the story-producing Wubbuloscope! The Cat then introduces viewers to the homes of all the other main characters in the show. The other lessons on the DVD include doing kind things for others for no reason, and not being afraid to try new things. What a great family DVD that parents and kids will most certainly enjoy watching together. The content is squeaky clean, the lessons are fabulous and the colors, songs, music, puppetry, computerization and overall presentation are top notch! The Wubbulous World of Dr. Seuss: The Cats Home But Not Alone easily earns the Dove Family-Approved Seal for family friendly viewing!",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2947,
            "movie_db_id": 9880,
            "movie_title": "The Princess Diaries",
            "release_date": "2001-08-03T04:00:00.000Z",
            "average_rating": "6.8",
            "genre": "Comedy",
            "overview": "A socially awkward but very bright 15-year-old girl being raised by a single mom discovers that she is the princess of a small European country because of the recent death of her long-absent father, who, unknown to her, was the crown prince of Genovia. She must make a choice between continuing the life of a San Francisco teen or stepping up to the throne.",
            "img": "https://image.tmdb.org/t/p/w500//ktPixrzD9Rbet7Co4uUWxyR9191.jpg"
        },
        {
            "id": 2974,
            "movie_db_id": 297797,
            "movie_title": "Green Lantern Corps",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Action",
            "overview": "A group of humans join the Green Lantern Corps, an alien interstellar police force that protects the universe.",
            "img": "https://image.tmdb.org/t/p/w500//UJ8KVc7Qqy4t95ATlYzdGaUILn.jpg"
        },
        {
            "id": 3296,
            "movie_db_id": 10157,
            "movie_title": "Police Academy 2: Their First Assignment",
            "release_date": "1985-03-28T05:00:00.000Z",
            "average_rating": "6",
            "genre": "Comedy",
            "overview": "Officer Carey Mahoney and his cohorts have finally graduated from the Police Academy and are about to hit the streets on their first assignment. Question is, are they ready to do battle with a band of graffiti-tagging terrorists$1 Time will tell, but dont sell short this cheerful band of doltish boys in blue.",
            "img": "https://image.tmdb.org/t/p/w500//htGhbTU3jHdwe9tVQZkDbHqd1LX.jpg"
        },
        {
            "id": 561,
            "movie_db_id": 225925,
            "movie_title": "Spider-Man Strikes Back",
            "release_date": "1978-12-21T05:00:00.000Z",
            "average_rating": "4.7",
            "genre": "Action",
            "overview": "At the New York State University, one of Peter Parkers tutors has accidentally given three students all the materials they need to create an atomic bomb. While Peter Parker tries to find out whats happened, the police suspect him of the crime, and Peter has to deal with an attractive journalist determined to get an interview with Spider-Man. Then dastardly millionaire Mr. White shows up, and will stop at nothing to get his hands on the atomic bomb. Spider-Man must defeat this scheming villain and stop him blowing up the World Trade Centre.",
            "img": "https://image.tmdb.org/t/p/w500//qdZpvTrr4J7mMAIF0Iv8E5on50G.jpg"
        },
        {
            "id": 2203,
            "movie_db_id": 270768,
            "movie_title": "Daredevil vs. Spider-Man",
            "release_date": "2003-02-11T05:00:00.000Z",
            "average_rating": "5.3",
            "genre": "Action",
            "overview": "Spider-Man and Daredevil team up to fight Kingpin.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2948,
            "movie_db_id": 11130,
            "movie_title": "The Princess Diaries 2: Royal Engagement",
            "release_date": "2004-08-06T04:00:00.000Z",
            "average_rating": "6.6",
            "genre": "Comedy",
            "overview": "Mia Thermopolis is now a college graduate and on her way to Genovia to take up her duties as princess. Her best friend Lilly also joins her for the summer. Mia continues her princess lessons- riding horses side-saddle, archery, and other royal. But her complicated life is turned upside down once again when she not only learns that she is to take the crown as queen earlier than expected...",
            "img": "https://image.tmdb.org/t/p/w500//pmOXaAK8hteMlCiMZyyDJENHCZI.jpg"
        },
        {
            "id": 3297,
            "movie_db_id": 53414,
            "movie_title": "Police",
            "release_date": "1916-05-27T05:00:00.000Z",
            "average_rating": "6.3",
            "genre": "Comedy",
            "overview": "Charlie is released from prison and immediately swindled by a fake parson. A fellow ex-convict convinces Charlie to help burglarize a house.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3302,
            "movie_db_id": 11895,
            "movie_title": "Police Academy 6: City Under Siege",
            "release_date": "1989-03-09T05:00:00.000Z",
            "average_rating": "5",
            "genre": "Comedy",
            "overview": "Our favourite police men are called together to deal with a gang who rob banks and jewelers. Using their various talents as well as their extraordinary luck, the crooks stand no chance against our men and women wearing blue..",
            "img": "https://image.tmdb.org/t/p/w500//7m6D3kQBrbMcqxwrSNEsvs1XuMS.jpg"
        },
        {
            "id": 3304,
            "movie_db_id": 605385,
            "movie_title": "Mister Police",
            "release_date": "2019-05-28T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Documentary",
            "overview": "The Michael Snowman",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1084,
            "movie_db_id": 377,
            "movie_title": "A Nightmare on Elm Street",
            "release_date": "1984-11-14T05:00:00.000Z",
            "average_rating": "7.3",
            "genre": "Horror",
            "overview": "Teenagers in a small town are dropping like flies, apparently in the grip of mass hysteria causing their suicides. A cops daughter, Nancy Thompson, traces the cause to child molester Fred Krueger, who was burned alive by angry parents many years before. Krueger has now come back in the dreams of his killers children, claiming their lives as his revenge. Nancy and her boyfriend, Glen, must devise a plan to lure the monster out of the realm of nightmares and into the real world...",
            "img": "https://image.tmdb.org/t/p/w500//67qMLI58HmQ5ArBsTVBxG4KHuRJ.jpg"
        },
        {
            "id": 1089,
            "movie_db_id": 321066,
            "movie_title": "Scream, Queen! My Nightmare on Elm Street",
            "release_date": "2019-04-05T04:00:00.000Z",
            "average_rating": "7",
            "genre": "Documentary",
            "overview": "Scream, Queen! examines the infamous homoerotic subtext and the special place the film holds in the Nightmare franchise as well as the gay film canon. Partly in thanks to evolving social mores, Nightmare on Elm Street 2 – which was considered controversial at the time of its release – is now being looked back upon with a new appreciation and fondness by horror aficionados and fans of the series.",
            "img": "https://image.tmdb.org/t/p/w500//trYTl7GCNwabtzGqL4zK32JKcuA.jpg"
        },
        {
            "id": 1090,
            "movie_db_id": 10072,
            "movie_title": "A Nightmare on Elm Street 3: Dream Warriors",
            "release_date": "1987-02-27T05:00:00.000Z",
            "average_rating": "6.6",
            "genre": "Horror",
            "overview": "Its been many years since Freddy Kruegers first victim, Nancy, came face-to-face with Freddy and his sadistic, evil ways. Now, Nancys all grown up; shes put her frightening nightmares behind her and is helping teens cope with their dreams. Too bad Freddys decided to herald his return by invading the kids dreams and scaring them into committing suicide.",
            "img": "https://image.tmdb.org/t/p/w500//u6qsH3JG7MsavPg1pZBSAdu4oUh.jpg"
        },
        {
            "id": 1095,
            "movie_db_id": 83616,
            "movie_title": "The Making of Nightmare on Elm Street IV",
            "release_date": "1989-10-31T05:00:00.000Z",
            "average_rating": "4.8",
            "genre": "Documentary",
            "overview": "Witness the behind-the-scenes techniques and gruesome special effects that dominate this box office hit! See through the mysteries of the slasher saga by watching brilliant direction from concept to actual filming, special make-up techniques, and all the mechanical devices used to produce the inherently terrifying nightmares. Starring Robert Englund as Freddy Krueger!",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1103,
            "movie_db_id": 527159,
            "movie_title": "A Nightmare on McKinley Street",
            "release_date": "2014-08-08T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Horror",
            "overview": "A girl is stalked and murdered in her home.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2324,
            "movie_db_id": 238,
            "movie_title": "The Godfather",
            "release_date": "1972-03-14T05:00:00.000Z",
            "average_rating": "8.7",
            "genre": "Crime",
            "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            "img": "https://image.tmdb.org/t/p/w500//7VrRna8S3x6xbijooeBmxqvHXiu.jpg"
        },
        {
            "id": 2326,
            "movie_db_id": 242,
            "movie_title": "The Godfather: Part III",
            "release_date": "1990-12-24T05:00:00.000Z",
            "average_rating": "7.4",
            "genre": "Crime",
            "overview": "In the midst of trying to legitimize his business dealings in 1979 New York and Italy, aging mafia don, Michael Corleone seeks forgiveness for his sins while taking a young protege under his wing.",
            "img": "https://image.tmdb.org/t/p/w500//6exeovaF27FlGZTd7eUi5WMUUCr.jpg"
        },
        {
            "id": 2328,
            "movie_db_id": 56205,
            "movie_title": "The Godfather Family: A Look Inside",
            "release_date": "1990-07-12T04:00:00.000Z",
            "average_rating": "7.9",
            "genre": "Documentary",
            "overview": "A documentary on the making of the three Godfather films, with interviews and recollections from the film makers and cast. This feature also includes the original screen tests of some of the actors for The Godfather film, and some candid moments on the set of The Godfather: Part III.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2331,
            "movie_db_id": 606215,
            "movie_title": "The Black Godfather",
            "release_date": "2019-06-07T04:00:00.000Z",
            "average_rating": "7.4",
            "genre": "Documentary",
            "overview": "Follows the life of Clarence Avant, the ultimate, uncensored mentor and behind-the-scenes rainmaker in music, film, TV and politics.",
            "img": "https://image.tmdb.org/t/p/w500//lrTKanWOB7tyOrK2m93pffSJoaS.jpg"
        },
        {
            "id": 2333,
            "movie_db_id": 70829,
            "movie_title": "The Last Godfather",
            "release_date": "2010-12-29T05:00:00.000Z",
            "average_rating": "4.6",
            "genre": "Action",
            "overview": "Young-goo the son of mafia boss Don Carini, is too foolish to be part of the mafia elite. One day, Young-goo comes to his father and is trained by Tony V to be his fathers successor. A few days later, Young-goo accidentally rescues Nancy, the only daughter of Don Bonfante, the boss of a rival mafia family. But Vinnie, an under-boss of the Bonfante family kidnapped her and fabricates that Young-goo has taken her. Vinnies behavior provokes an armed conflict between the two families.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2335,
            "movie_db_id": 73725,
            "movie_title": "The Godfather of Green Bay",
            "release_date": "2005-04-20T04:00:00.000Z",
            "average_rating": "3.8",
            "genre": "Comedy",
            "overview": "Joe Keegan is the Rocky of stand-up comedy. A fifteen-year comedy veteran who was pegged for stardom early on in his career but has blown every major audition he has ever had in legendary fashion. Fresh off a recent fiasco with a heckler that included a broken nose, Joes friend Kenny tells him he can get them an audition for The Tonight Show and that its a cant miss. The one catch is that its at a roadside bar in tiny Pine Lake, Wisconsin, hometown of Tonight Show Talent scout, Harvey Skorik who never misses Rocktoberfest. Having doubts but needing a break from L.A., Joe reluctantly agrees to go. Arriving in Wisconsin, Joe bombs his first night on stage when local emcee Dug sabotages him. Joe cannot get a break until he encounters his former high school English teacher, the beautiful Molly Mahoney who is also at a crossroads in her life.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2343,
            "movie_db_id": 311805,
            "movie_title": "James Brown: The Godfather of Soul",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "The Godfather of Soul changed the face of music with his impassioned vocals and fiery intensity. This A&amp;E biography looks back at James Browns life and career. Growing up poor in the South, Brown had a few scrapes with the law before finding gospel. Gospel led to soul, and Brown became a legend with the hits Papas Got a Brand New Bag and I Got You (I Feel Good), securing his status as the Hardest Working Man in Show Business.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2949,
            "movie_db_id": 522825,
            "movie_title": "The Real Princess Diaries: From Diana to Meghan",
            "release_date": "2018-05-07T04:00:00.000Z",
            "average_rating": "2.3",
            "genre": "Documentary",
            "overview": "Breaking down the future of the modern day Princess through the lives of three trailblazing women: Diana, Princess of Wales, Kate Middleton, Duchess of Cambridge, and Meghan Markle. The special features a roster of royal, pop culture, and style experts including Karamo Brown, Michelle Lee, Melanie Bromley, Zanna Roberts Rassi, Heather Cocks & Jessica Morgan, and more.",
            "img": "https://image.tmdb.org/t/p/w500//nea6sJSJQAuWMJAgyrCXDWcS5VK.jpg"
        },
        {
            "id": 3299,
            "movie_db_id": 6320,
            "movie_title": "Police",
            "release_date": "1985-09-04T04:00:00.000Z",
            "average_rating": "6.1",
            "genre": "Crime",
            "overview": "Mangin, a police inspector in Paris, leans hard on informants to get evidence on three Tunisian brothers who traffic in drugs. He arrests one, Simon, and his girl-friend Noria. Simons brothers go to their lawyer. He springs Noria, who promptly steals 2 million francs that belong to the Tunisians. They suspect her of the theft; her life as well as the lawyers is in danger. Meanwhile, Noria is playing with both the lawyer and Mangins affections. Mangin is mercurial anyway: intimidating and bloodying suspects, falling for a police commission trainee before flipping for Noria, wearing his emotions on his sleeve. Can he save the lawyer and Noria, and can he convince her to love$1",
            "img": "https://image.tmdb.org/t/p/w500//2Nc1M3vXyv1P5Pp3K6RUViJ4Lye.jpg"
        },
        {
            "id": 1087,
            "movie_db_id": 10160,
            "movie_title": "A Nightmare on Elm Street: The Dream Child",
            "release_date": "1989-08-11T04:00:00.000Z",
            "average_rating": "5.4",
            "genre": "Horror",
            "overview": "Alice, having survived the previous installment of the Nightmare series, finds the deadly dreams of Freddy Krueger starting once again. This time, the taunting murderer is striking through the sleeping mind of Alices unborn child. His intention is to be born again into the real world. The only one who can stop Freddy is his dead mother, but can Alice free her spirit in time to save her own son$1",
            "img": "https://image.tmdb.org/t/p/w500//yNqhMQUDfXGKWYI6Hw6HARBCrbn.jpg"
        },
        {
            "id": 1091,
            "movie_db_id": 425888,
            "movie_title": "A Nightmare on Elm Street",
            "release_date": "2021-12-31T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Horror",
            "overview": "A reboot of the 1984 film and the 2010 remake.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1096,
            "movie_db_id": 268019,
            "movie_title": "Nightmare on Elm Street: The Series Encyclopedia",
            "release_date": "1999-09-21T04:00:00.000Z",
            "average_rating": "6",
            "genre": "Documentary",
            "overview": "Nightmare on Elm Street: The Series Encyclopedia is a bonus DVD in the Nightmare on Elm Street Collection. This boxed set boasts beautiful anamorphic transfers of all seven Elm Street films. Rather than adding trailers, outtakes, and other supplements to each of the seven movie DVDs, New Line decided collect all of their extra material on an eigth disc. The result of this decision was the Nightmare Series Encyclopedia. It contains interviews with the cast and crew of the Elm Street movies, Krueger Quips from the set of  Elm Street 5, snippets from Freddys appearances on MTV, music videos from the films, still galleries, alternate endings to Elm Street 1, and trailers for all seven movies. In all, there are 93 video clips and 3 still galleries on the disc adding up to more than 3.5 hours of material.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1101,
            "movie_db_id": 574054,
            "movie_title": "A Nightmare on Sesame Street",
            "release_date": "1987-06-13T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Comedy",
            "overview": "Nightmare on Sesame Street is a spoof of B-rated horror movies with muppets.  This movie was shot in 1987 and was shown on Quad Cities Cable Access (Anoka, Champlin, Fridley, and Blaine Minnesota).",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2325,
            "movie_db_id": 240,
            "movie_title": "The Godfather: Part II",
            "release_date": "1974-12-20T05:00:00.000Z",
            "average_rating": "8.6",
            "genre": "Crime",
            "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            "img": "https://image.tmdb.org/t/p/w500//bNDAvlXCX160fF54ltA4SGpPGI5.jpg"
        },
        {
            "id": 2327,
            "movie_db_id": 294636,
            "movie_title": "The Godfather Legacy",
            "release_date": "2012-07-12T04:00:00.000Z",
            "average_rating": "7.3",
            "genre": "Documentary",
            "overview": "THE GODFATHER LEGACY goes deep inside Francis Ford Coppolas epic saga about the Corleone crime family and reveals how the Academy Award-winning film and its sequels became one of the most acclaimed franchises in Hollywood history. Featuring iconic scenes from all three films, never before seen home movies and insightful interviews with filmmakers (Francis Ford Coppola, All Ruddy and Peter Bart), actors (Al Pacino, James Caan, Talia Shire, Joe Mantegna, et al.), law enforcement officials and even former Mafia members. This feature length documentary illustrates why The Godfather trilogy continues to entertain and fascinate audiences and how it continues to impact the way society views everything from capitalism to crime.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2329,
            "movie_db_id": 364150,
            "movie_title": "The Godfather Trilogy: 1901-1980",
            "release_date": "1992-10-17T04:00:00.000Z",
            "average_rating": "9.3",
            "genre": "Crime",
            "overview": "The multigenerational saga of the rise and fall of the Corleone crime family. Story is told in chronological order, and numerous scenes that were deleted from each film have been restored.",
            "img": "https://image.tmdb.org/t/p/w500//tYjyk4Ij7CwVOn2ovcXdRYffR9k.jpg"
        },
        {
            "id": 2330,
            "movie_db_id": 526803,
            "movie_title": "Fred: The Godfather of British Crime",
            "release_date": "2018-04-20T04:00:00.000Z",
            "average_rating": "7.4",
            "genre": "Western",
            "overview": "This is an examination into the psyche of former London gangster Freddie Foreman: 85 years old, allegedly responsible for multiple murders, and nearing the end of his life. Fred is the only gangster who lived through the turbulent history of the British underworld and survived to tell the tale.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2332,
            "movie_db_id": 58862,
            "movie_title": "Herschell Gordon Lewis: The Godfather of Gore",
            "release_date": "2010-06-01T04:00:00.000Z",
            "average_rating": "6.9",
            "genre": "Documentary",
            "overview": "Take an outrageous ride through this wild world of exploitation films with this thoroughly entertaining documentary, HERSCHELL GORDON LEWIS – THE GODFATHER OF GORE! Featuring cult director John Waters, Drive-In Movie Critic Joe Bob Briggs, Herschell Gordon Lewis himself and a “cast of thousands,” you’ll witness the innocent bare-naked era of Nudie-Cuties before Lewis schocked the world with “Blood Feast,” the first ever gore film!",
            "img": "https://image.tmdb.org/t/p/w500//j4wwKS0aokfGe7QDYqU2k6744hi.jpg"
        },
        {
            "id": 2337,
            "movie_db_id": 598173,
            "movie_title": "The Godfather of Disco",
            "release_date": "2007-03-04T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "At the heart of this remarkable, music-filled documentary is the story of Mel Cheren, the ‘Godfather’ himself. The film traces the cultural conditions which led to the flowering of disco, the founding of West End Movies and the Paradise Garage and, eventually, the onslaught of AIDS and its devastating effect on the musical and gay communities of New York City. Yet, like disco itself, it is primarily celebratory in nature. Randy Jones, Junior Vasquez and Louis Vega contribute, among many others. This evocative work will interest anyone who has danced to anything, ever.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2341,
            "movie_db_id": 704923,
            "movie_title": "The Godfather",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "Best Picture 1972",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2950,
            "movie_db_id": 568604,
            "movie_title": "On the Set The Princess Diaries 2 - Royal Engagement",
            "release_date": "2004-08-05T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Documentary",
            "overview": "",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3298,
            "movie_db_id": 12118,
            "movie_title": "Police Academy 3: Back in Training",
            "release_date": "1986-03-20T05:00:00.000Z",
            "average_rating": "5.7",
            "genre": "Comedy",
            "overview": "When police funding is cut, the Governor announces he must close one of the academies. To make it fair, the two police academies must compete against each other to stay in operation. Mauser persuades two officers in Lassards academy to better his odds, but things dont quite turn out as expected...",
            "img": "https://image.tmdb.org/t/p/w500//5smkOfRSHweYIO0gDFajc8J0fb0.jpg"
        },
        {
            "id": 1085,
            "movie_db_id": 23437,
            "movie_title": "A Nightmare on Elm Street",
            "release_date": "2010-04-30T04:00:00.000Z",
            "average_rating": "5.5",
            "genre": "Horror",
            "overview": "The film that brings back horror icon Freddy Krueger as a darker and more sinister character than ever before. While Freddy is on the prowl a group of teenagers being stalked soon learn they all have a common factor making them targets for this twisted killer.",
            "img": "https://image.tmdb.org/t/p/w500//pw2ulGFMUGUzvKME0Ln1gbNj4MU.jpg"
        },
        {
            "id": 1093,
            "movie_db_id": 367139,
            "movie_title": "Nightmare on Elmos Street",
            "release_date": "2015-06-25T04:00:00.000Z",
            "average_rating": "0.8",
            "genre": "Comedy",
            "overview": "Puppets live alongside humans peacefully, but suddenly their behavior becomes depraved. Is such criminal activity rare, or is the media blowing things out of proportion, making cops look like sadistic gunslingers and causing people to distrust them, each other, and most of all, puppets. Is the apocalypse coming, or is the fear-mongering just a great way for News programs to get advertising money$1 Wait – that makes this movie sound like a serious allegory. Change that. This movie has more wtf moments than you can imagine. It’s high brow and low brow at the same time.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1098,
            "movie_db_id": 421756,
            "movie_title": "A Nightmare on Elm Street: Trial by Fire",
            "release_date": "2015-11-19T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Horror",
            "overview": "Marilyn, seventeen, awakes from a nightmare revolving around a maniacal, scarred killer to learn that Elizabeth, a fellow classmate that she saw get murdered in her nightmare has died in real life. The recent murders on Elm Street revive the guilty consciences of Marilyns and her friends parents, and they begin to question what really happened over a decade earlier after the Springwood Slasher was set free.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2334,
            "movie_db_id": 87426,
            "movie_title": "Paul Mooney: The Godfather of Comedy",
            "release_date": "2012-02-03T05:00:00.000Z",
            "average_rating": "3.8",
            "genre": "Comedy",
            "overview": "The venomous, no-holds-barred style of standup comedy legend Paul Mooney is on full display in this concert special that finds the vitriolic funnyman sparing no politician or pop culture icon from his scathing wit, including Sarah Palin, Mel Gibson and even golf pro Tiger Woods. Defiant, socially relevant, and always hilarious, its a legendary Mooney performance, taped live at the Cobb Energy Centre in Atlanta, Georgia.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2338,
            "movie_db_id": 80755,
            "movie_title": "The Black Godfather",
            "release_date": "1974-09-03T04:00:00.000Z",
            "average_rating": "5.3",
            "genre": "Action",
            "overview": "The heroes in The Black Godfather are members of an African-American criminal organization. Like Brando in The Godfather, theyre not averse to robbery and murder, but they do draw the line at narcotics. When the Mafia infiltrates the hood with dangerous drugs, the Black Godfather (Rod Perry) orders his minions to put an end to this perfidy.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2340,
            "movie_db_id": 704948,
            "movie_title": "The Godfather Epic",
            "release_date": "1977-05-16T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Crime",
            "overview": "",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2968,
            "movie_db_id": 181508,
            "movie_title": "Spider-Man Tech",
            "release_date": "2007-05-02T04:00:00.000Z",
            "average_rating": "9.3",
            "genre": "Documentary",
            "overview": "This documentary discuss all the laws of physics , genetic biology and reflexis which Peter Parker (Spiderman) uses and how he become so powerful dispite of having comparatively weak body.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2973,
            "movie_db_id": 17445,
            "movie_title": "Green Lantern: First Flight",
            "release_date": "2009-07-28T04:00:00.000Z",
            "average_rating": "6.6",
            "genre": "Action",
            "overview": "Test pilot Hal Jordan finds himself recruited as the newest member of the intergalactic police force, The Green Lantern Corps.",
            "img": "https://image.tmdb.org/t/p/w500//olCndjowxDs7YZrXm9OtT8vQ0Hb.jpg"
        },
        {
            "id": 3308,
            "movie_db_id": 36715,
            "movie_title": "Police State IV: The Rise of FEMA",
            "release_date": "2010-04-20T04:00:00.000Z",
            "average_rating": "6.7",
            "genre": "Documentary",
            "overview": "POLICE STATE 4 chronicles the sickening depths to which our republic has fallen. Veteran documentary filmmaker Alex Jones conclusively proves the existence of a secret network of FEMA camps, now being expanded nationwide. The military industrial complex is transforming our once free nation into a giant prison camp. A cashless society control grid, constructed in the name of fighting terrorism, was actually built to enslave the American people. Body scanners, sound cannons, citizen spies, staged terror and cameras on every street corner -- its only the beginning of the New World Orders hellish plan. This film exposes how the Continuity of Government program has established an all powerful shadow state. Prepare to enter the secretive world of emergency dictatorship, FEMA camps, and a shredded Constitution.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1086,
            "movie_db_id": 10131,
            "movie_title": "A Nightmare on Elm Street 4: The Dream Master",
            "release_date": "1988-08-19T04:00:00.000Z",
            "average_rating": "5.8",
            "genre": "Horror",
            "overview": "Dream demon Freddy Krueger is resurrected from his apparent demise, and rapidly tracks down and kills the remainder of the Elm Street kids. However, Kristen, who can draw others into her dreams, wills her special ability to her friend Alice. Alice soon realizes that Freddy is taking advantage of that unknown power to pull a new group of children into his foul domain.",
            "img": "https://image.tmdb.org/t/p/w500//zbCcVVovEbVsMoWbpktj5Eg14lV.jpg"
        },
        {
            "id": 1092,
            "movie_db_id": 115666,
            "movie_title": "Nightmare on the 13th Floor",
            "release_date": "1990-10-31T05:00:00.000Z",
            "average_rating": "5.3",
            "genre": "Horror",
            "overview": "In this made-for-cable television horror thriller, a travel writer visits a historic hotel to write a story about it and inadvertently finds herself on the 13th floor where she witnesses a Satanic rite and tangles with an axe-wielding killer. She escapes, but no one believes her story because the hotel has no 13th floor.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1099,
            "movie_db_id": 669726,
            "movie_title": "The Nightmare on Deskteeth Street",
            "release_date": "2020-01-25T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "",
            "img": "https://image.tmdb.org/t/p/w500//kMCIatOh9c6X9IjQqPTWiHXprzw.jpg"
        },
        {
            "id": 2336,
            "movie_db_id": 409523,
            "movie_title": "The Godfather and the Mob",
            "release_date": "2006-04-25T04:00:00.000Z",
            "average_rating": "7",
            "genre": "Documentary",
            "overview": "The Godfather And The Mob reveals the true life story of murder, mafia and mayhem that occurred behind the scenes of the most iconic gangster film ever made.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2342,
            "movie_db_id": 257994,
            "movie_title": "Stan Tracey: The Godfather of British Jazz",
            "release_date": "2003-01-01T05:00:00.000Z",
            "average_rating": "9",
            "genre": "Western",
            "overview": "Stan Tracey: The Godfather of British Jazz  is a portrait of one musician’s lifetime achievement. In a career spanning 60 years as pianist and composer, Tracey (1926 – 2013), recalls his life with unprecedented honesty. The film combines a mix of archive, landscape and interviews with musical giants such as saxophonist Courtney Pine, doyenne Cleo Laine and jazz eminence Humphrey Lyttleton.  Stan Tracey’s obituary, published in the Guardian, 6 December 2013 can be viewed here.  smokingdogfilms.com",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2971,
            "movie_db_id": 44912,
            "movie_title": "Green Lantern",
            "release_date": "2011-06-16T04:00:00.000Z",
            "average_rating": "5.1",
            "genre": "Action",
            "overview": "For centuries, a small but powerful force of warriors called the Green Lantern Corps has sworn to keep intergalactic order. Each Green Lantern wears a ring that grants him superpowers. But when a new enemy called Parallax threatens to destroy the balance of power in the Universe, their fate and the fate of Earth lie in the hands of the first human ever recruited.",
            "img": "https://image.tmdb.org/t/p/w500//sGWlHk86Cshsu5BJ49DhezS7FXw.jpg"
        },
        {
            "id": 3015,
            "movie_db_id": 202980,
            "movie_title": "Les petits princes",
            "release_date": "2013-06-26T04:00:00.000Z",
            "average_rating": "6.8",
            "genre": "Comedy",
            "overview": "JB suffers from a heart malformation .He falsifies his medical file ,so that he can enter a top athlete training center.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3025,
            "movie_db_id": 297123,
            "movie_title": "Nuits de princes",
            "release_date": "1930-03-04T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Drama",
            "overview": "Silent French film by director Marcel LHerbier. Based on a novel by Joseph Kessel.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3310,
            "movie_db_id": 74314,
            "movie_title": "Bulldog Drummonds Secret Police",
            "release_date": "1939-03-29T05:00:00.000Z",
            "average_rating": "6.1",
            "genre": "Mystery",
            "overview": "Captain Drummond and his girlfriend want to marry but a hidden treasure in the house in which they want to celebrate their marriage is complicating the situation involving a series of deaths and an elusive murderer.",
            "img": "https://image.tmdb.org/t/p/w500//sOZ9C6Yz9psl3FxN59mtV9rmt1z.jpg"
        },
        {
            "id": 1088,
            "movie_db_id": 10014,
            "movie_title": "A Nightmare on Elm Street Part 2: Freddys Revenge",
            "release_date": "1985-10-31T05:00:00.000Z",
            "average_rating": "5.8",
            "genre": "Horror",
            "overview": "A new family moves into the house on Elm Street, and before long, the kids are again having nightmares about deceased child murderer Freddy Krueger. This time, Freddy attempts to possess a teenage boy to cause havoc in the real world, and can only be overcome if the boys sweetheart can master her fear.",
            "img": "https://image.tmdb.org/t/p/w500//jjp0pOGBX7b2ZCUwI6U837HiYGS.jpg"
        },
        {
            "id": 1094,
            "movie_db_id": 571908,
            "movie_title": "Nightmare on 34th Street",
            "release_date": "2019-11-12T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "A mysterious Santa arrives on 34th Street, to recall three interconnected horror stories which will leave you never looking at Christmas the same way again.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1100,
            "movie_db_id": 147812,
            "movie_title": "A Nightmare on Castro Street",
            "release_date": "2002-07-01T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "Part Two in the “Tran-ilogy of Terror” series. There’s a nightmare on Castro Street – a street where gay no longer means ‘happy’. Peaches Christ thought she was doing right by forcing her drunken gal pal Squeaky Blonde into rehab. When a sober Squeaky returns to the Castro, old ghosts prove too powerful and a terrifying relapse leads to a monstrous transformation!",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2339,
            "movie_db_id": 585025,
            "movie_title": "Emulsional Rescue: Revealing The Godfather",
            "release_date": "2008-09-23T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Documentary",
            "overview": "We hear from Coppola, Spielberg, director of photography Gordon Willis, consulting restoration cinematographer Allen Daviau, film archivist Robert A. Harris, Paramount Post Production executive VP Martin Cohen, MPI senior technical advisor Daniel Rosen, MPI scanning technician Chris Gillaspie, senior digital artist Steven A. Sanchez, digital artist Valerie V. McMahon, and MPI technical director and senior colorist Jan Yarbrough as they offer interesting facts about the original cinematography, details on the restoration of the three films.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2345,
            "movie_db_id": 5551,
            "movie_title": "Space Cowboys",
            "release_date": "2000-07-31T04:00:00.000Z",
            "average_rating": "6.4",
            "genre": "Action",
            "overview": "Frank Corvin, ‘Hawk’ Hawkins, Jerry ONeill and ‘Tank’ Sullivan were hotdog members of Project Daedalus, the Air Forces test program for space travel, but their hopes were dashed in 1958 with the formation of NASA and the use of trained chimps. They blackmail their way into orbit when Russias mysterious ‘Ikon’ communications satellites orbit begins to degrade and threatens to crash to Earth.",
            "img": "https://image.tmdb.org/t/p/w500//iTYEfcbLMlU6YsvKPXDRvdmi6ft.jpg"
        },
        {
            "id": 2346,
            "movie_db_id": 15573,
            "movie_title": "The Cowboys",
            "release_date": "1972-01-13T05:00:00.000Z",
            "average_rating": "7.1",
            "genre": "Action",
            "overview": "When his cattlemen abandon him for the gold fields, rancher Wil Andersen is forced to take on a collection of young boys as his cowboys in order to get his herd to market in time to avoid financial disaster. The boys learn to do a mans job under Andersens tutelage; however, neither Andersen nor the boys know that a gang of cattle thieves is stalking them.",
            "img": "https://image.tmdb.org/t/p/w500//pzWkw7Acgn7OyAwMHTlrB6PGnNa.jpg"
        },
        {
            "id": 2347,
            "movie_db_id": 20148,
            "movie_title": "Cowboys & Angels",
            "release_date": "2004-07-23T04:00:00.000Z",
            "average_rating": "6.7",
            "genre": "Comedy",
            "overview": "This story concerns a hapless civil servant who gets more than he bargains for when he moves into an apartment in Limerick with a gay fashion student and becomes a star on the catwalk. A contemporary story embracing the essence of what it is to be young in todays Ireland.",
            "img": "https://image.tmdb.org/t/p/w500//oVrtCCxBl30AfHrESy6GHZM0fBi.jpg"
        },
        {
            "id": 2349,
            "movie_db_id": 336811,
            "movie_title": "Les Cowboys",
            "release_date": "2015-05-21T04:00:00.000Z",
            "average_rating": "6.6",
            "genre": "Drama",
            "overview": "Drama about a father and son who set out to find their missing daughter/sister with the help of an American headhunter.",
            "img": "https://image.tmdb.org/t/p/w500//7O4RcjTNHLFuogbjbF7sWPIxIXX.jpg"
        },
        {
            "id": 2351,
            "movie_db_id": 337208,
            "movie_title": "Cowboys vs. Dinosaurs",
            "release_date": "2015-05-19T04:00:00.000Z",
            "average_rating": "3.8",
            "genre": "Science fiction",
            "overview": "After an accidental explosion at a local mine, dinosaurs emerge from the rubble to terrorize a small western town. Now, a group of gunslingers must defend their home if anyone is going to survive in a battle of cowboys versus dinosaurs.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2353,
            "movie_db_id": 314407,
            "movie_title": "Cocaine Cowboys: Reloaded",
            "release_date": "2014-04-08T04:00:00.000Z",
            "average_rating": "7.5",
            "genre": "Documentary",
            "overview": "In the 1980s, ruthless Colombian cocaine barons invaded Miami with a brand of violence unseen in this country since Prohibition-era Chicago. Cocaine Cowboys is the true story of how Miami became the drug, murder and cash capital of the United States. But it isnt the whole story - Pulling from hundreds of hours of additional interviews and recently uncovered archival news footage, Cocaine Cowboys has been RELOADED: packed with footage and stories that have never been told about Griselda Blanco, the Medellín Cartel, and Miamis Cocaine Wars, with firsthand accounts by hit man Jorge Rivi Ayala, cocaine trafficker Jon Roberts, smuggler Mickey Munday, and others. Cocaine Cowboys: Reloaded recreates Miamis Cocaine Wars like youve never experienced it.",
            "img": "https://image.tmdb.org/t/p/w500//p4Zcz4c3cchjYAEc9HuSUVbwjnL.jpg"
        },
        {
            "id": 2355,
            "movie_db_id": 237802,
            "movie_title": "Concrete Cowboys",
            "release_date": "1979-10-16T04:00:00.000Z",
            "average_rating": "5.3",
            "genre": "Adventure",
            "overview": "Two Montana saddletramps head to Nashville to open up a detective agency. At first, the agency begins on a lark, but soon they get involved in a case involving a kidnapped singer.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2357,
            "movie_db_id": 100095,
            "movie_title": "Cowboys & Indians",
            "release_date": "2011-01-01T05:00:00.000Z",
            "average_rating": "3.3",
            "genre": "Action",
            "overview": "With the fate of the frontier hanging in the balance, a former cavalry officer is called back into action to rescue a beautiful maiden from the clutches a band of renegade Black Claw Indians led by a frightening medicine man.",
            "img": "https://image.tmdb.org/t/p/w500//fMJTwImSskWshDXEGVobjKE9t0C.jpg"
        },
        {
            "id": 2360,
            "movie_db_id": 287666,
            "movie_title": "Cowboys vs. Zombies",
            "release_date": "2014-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Action",
            "overview": "In a post-apocalyptic world where zombies attack the remnants of humanity, one survivor is forced to make a deal with the devil. In order to regain his soul and escape his torment he must save an entire town from the living dead.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2972,
            "movie_db_id": 65291,
            "movie_title": "Green Lantern: Emerald Knights",
            "release_date": "2011-04-09T04:00:00.000Z",
            "average_rating": "6.4",
            "genre": "Action",
            "overview": "As the home planet of the Green Lantern Corps faces a battle with an ancient enemy, Hal Jordan prepares new recruit Arisia for the coming conflict by relating stories of the first Green Lantern and several of Hals comrades.",
            "img": "https://image.tmdb.org/t/p/w500//cgigaTI0slw8MRZZMODaDnmAsmL.jpg"
        },
        {
            "id": 3017,
            "movie_db_id": 453381,
            "movie_title": "Clown Princes",
            "release_date": "1939-04-14T05:00:00.000Z",
            "average_rating": "4",
            "genre": "Comedy",
            "overview": "The Our Gang kids put on a circus in the barn to raise money to help Porkys family pay the rent and avoid getting evicted.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3028,
            "movie_db_id": 377797,
            "movie_title": "Princes Street Edinburgh",
            "release_date": "1955-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Drama",
            "overview": "A short piece of film movieing general views of Edinburghs Princes Street in the 1950s.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3033,
            "movie_db_id": 272515,
            "movie_title": "Princes in the Tower",
            "release_date": "2005-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Music",
            "overview": "Drama - The mystery surrounding the disappearance 12 year-old King Edward V and his brother Richard, Duke of York, has been the cause of speculation and fascination for over five centuries. In 1491, eight years after the Princes in the Tower were presumed murdered, a young man told an astonished world that he was Richard, back to claim the throne of England. -  Mark Umbers, John Castle, Roger Hammond",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1097,
            "movie_db_id": 641326,
            "movie_title": "A Nightmare on Chocolate",
            "release_date": "2019-07-12T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "Christine has a weird dream, from which she may never wake up.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2344,
            "movie_db_id": 49849,
            "movie_title": "Cowboys & Aliens",
            "release_date": "2011-07-29T04:00:00.000Z",
            "average_rating": "5.5",
            "genre": "Action",
            "overview": "A stranger stumbles into the desert town of Absolution with no memory of his past and a futuristic shackle around his wrist. With the help of mysterious beauty Ella and the iron-fisted Colonel Dolarhyde, he finds himself leading an unlikely posse of cowboys, outlaws, and Apache warriors against a common enemy from beyond this world in an epic showdown for survival.",
            "img": "https://image.tmdb.org/t/p/w500//hwkhL81vsCSjf3ARs6DGpMIZe8n.jpg"
        },
        {
            "id": 2348,
            "movie_db_id": 14761,
            "movie_title": "Cocaine Cowboys",
            "release_date": "2006-04-26T04:00:00.000Z",
            "average_rating": "7.5",
            "genre": "Action",
            "overview": "In the 1980s, ruthless Colombian cocaine barons invaded Miami with a brand of violence unseen in this country since Prohibition-era Chicago - and it put the city on the map. Cocaine Cowboys is the true story of how Miami became the drug, murder and cash capital of the United States, told by the people who made it all happen.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2350,
            "movie_db_id": 381058,
            "movie_title": "Silicon Cowboys",
            "release_date": "2016-09-16T04:00:00.000Z",
            "average_rating": "6.8",
            "genre": "Documentary",
            "overview": "Launched in 1982 by three friends in a Houston diner, Compaq Computer set out to build a portable PC to take on IBM, the world’s most powerful tech company. Many had tried cloning the industry leader’s code, only to be trounced by IBM and its high-priced lawyers. Explore the remarkable David vs. Goliath story, and eventual demise, of Compaq, an unlikely upstart who altered the future of computing and helped shape the world as we know it today.",
            "img": "https://image.tmdb.org/t/p/w500//xl2UhcMFSyZ2oMgsYxY8SiHP20o.jpg"
        },
        {
            "id": 2352,
            "movie_db_id": 11475,
            "movie_title": "Leningrad Cowboys Go America",
            "release_date": "1989-03-24T05:00:00.000Z",
            "average_rating": "7.1",
            "genre": "Comedy",
            "overview": "The Leningrad Cowboys, a group of Russian musicians, and their manager, travel to America seeking fame and fortune. As they cross the country, trying to get to a wedding in Mexico, they are followed by the village idiot, who wishes to join the band.",
            "img": "https://image.tmdb.org/t/p/w500//kevyDBlyEJvQOPGd0b3BbtPKqrK.jpg"
        },
        {
            "id": 2354,
            "movie_db_id": 26769,
            "movie_title": "Cocaine Cowboys II: Hustlin with the Godmother",
            "release_date": "2008-07-29T04:00:00.000Z",
            "average_rating": "6.8",
            "genre": "Action",
            "overview": "Set in 1991 on the inner-city streets of Oakland, California, cocaine dealer Charles Cosby has his life is changed forever when he writes a fan letter to the Cocaine Godmother Griselda Blanco, who is serving time at a nearby federal prison. Six months later, Cosby is a multi-millionaire, Blancos lover, and the head of her $40 million a year cocaine business.",
            "img": "https://image.tmdb.org/t/p/w500//3aaBt3pKQiIqtWvlOFr0PbnonGg.jpg"
        },
        {
            "id": 2356,
            "movie_db_id": 256872,
            "movie_title": "Even Cowboys Get to Cry",
            "release_date": "2013-07-04T04:00:00.000Z",
            "average_rating": "5.7",
            "genre": "Drama",
            "overview": "When Sven provokes a fight after an evening out in Amsterdam his best friend ends up in a coma, and nothing is the same as before.",
            "img": "https://image.tmdb.org/t/p/w500//2SW7q5y2er12At03DUZq2a2Gqag.jpg"
        },
        {
            "id": 2358,
            "movie_db_id": 30366,
            "movie_title": "Leningrad Cowboys Meet Moses",
            "release_date": "1994-02-24T05:00:00.000Z",
            "average_rating": "5.6",
            "genre": "Adventure",
            "overview": "After years of fame and misfortune in Mexico, the members of the Leningrad Cowboys decide to return to their native village. Their former manager Vladimir, who now calls himself Moses lead them on their way home.",
            "img": "https://image.tmdb.org/t/p/w500//uLAPD9on8R73dzkl5al3qax12TE.jpg"
        },
        {
            "id": 2362,
            "movie_db_id": 681022,
            "movie_title": "Cowboys",
            "release_date": "2020-04-15T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "Troy and his young transgender son Joe are on the run from his conservative mother in the Montana wilderness, with a detective in hot pursuit in this emotionally powerful narrative.",
            "img": "https://image.tmdb.org/t/p/w500//uDSTn55z1BIXMnSFolmLbSsDnFh.jpg"
        },
        {
            "id": 3016,
            "movie_db_id": 65592,
            "movie_title": "Princes and Princesses",
            "release_date": "2000-01-26T05:00:00.000Z",
            "average_rating": "7.7",
            "genre": "Animation",
            "overview": "In this episodic animated fantasy from France, an art teacher interprets a series of six fairy tales (each involving a prince or princess) with the help of two precocious students. Princes et Princesses was created using a special style of cutout animation, with black silhouetted characters performing the action against backlit backdrops in striking colors.",
            "img": "https://image.tmdb.org/t/p/w500//rhRMIbwH7pynEY137EiSApB65l9.jpg"
        },
        {
            "id": 3027,
            "movie_db_id": 580411,
            "movie_title": "Mirrors for Princes",
            "release_date": "2011-11-28T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Drama",
            "overview": "",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3034,
            "movie_db_id": 183310,
            "movie_title": "Life Guards and Princes North of St Pauls",
            "release_date": "1897-01-01T05:00:00.000Z",
            "average_rating": "3.3",
            "genre": "Documentary",
            "overview": "No Overview",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3367,
            "movie_db_id": 467839,
            "movie_title": "Aliens vs. Titanic",
            "release_date": "2017-09-18T04:00:00.000Z",
            "average_rating": "4.4",
            "genre": "Science Fiction",
            "overview": "Offering only the finest amenities, the ‘TITAN 1C’ space-cruiser is considered the most luxurious star-liner ever built. Future spring-breakers on board are excited to be touring through space with some of the world’s elite. However, a sudden meteor storm smashes into the hull, and a deadly biological alien life form is let loose on the ship.  Seeking a suitable host, the retrovirus successfully merges with some the passengers, transforming them into seemingly invincible predators with the “touch of death”. As the ship is destroyed, the surviving passengers crash on a remote planet, and they learn that one of them is “infected”. They must quickly band together before it has a chance to slaughter them all.",
            "img": "https://image.tmdb.org/t/p/w500//xSssW53a2s2euCdyI4aEpzyZfb1.jpg"
        },
        {
            "id": 3383,
            "movie_db_id": 83036,
            "movie_title": "Titanic Town",
            "release_date": "1998-08-08T04:00:00.000Z",
            "average_rating": "1",
            "genre": "Drama",
            "overview": "Belfast 1972: The politically naive Bernie is trying to bring up a normal family in less than normal surroundings. Her best friend is accidentally shot dead by the IRA, and her neighbours are constantly raided by the army. In this climate of fear she stands up and condemns the murders. Criticising both factions, her call for a ceasefire is interpreted as an attack against the IRA, and as her peace movement takes momentum, she and her family are placed in the frontline.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1102,
            "movie_db_id": 335187,
            "movie_title": "A Nightmare on Drug Street",
            "release_date": "1989-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Drama",
            "overview": "Middle class teenagers Jill, Felipe and Eddie, talk about their addiction and drug-related death.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2359,
            "movie_db_id": 8372,
            "movie_title": "Lonesome Cowboys",
            "release_date": "1968-11-01T05:00:00.000Z",
            "average_rating": "6",
            "genre": "Comedy",
            "overview": "Five lonesome cowboys get all hot and bothered at home on the range after confronting Ramona Alvarez and her nurse.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3018,
            "movie_db_id": 120310,
            "movie_title": "Les Princes",
            "release_date": "1983-11-02T05:00:00.000Z",
            "average_rating": "7.2",
            "genre": "Drama",
            "overview": "Feature film about Gypsies set out in the suburbs of Paris.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3029,
            "movie_db_id": 626403,
            "movie_title": "The Rival Princes of the Gulf",
            "release_date": "2019-06-26T04:00:00.000Z",
            "average_rating": "8",
            "genre": "Documentary",
            "overview": "Between 2013 and 2015, three princes became the leaders of the Persian Gulfs main oil monarchies: Qatar, Saudi Arabia and the United Arab Emirates. This new generation of sovereigns, some of the richest and most powerful on the planet, has imposed a new way to govern, between violence, repression and ego wars.",
            "img": "https://image.tmdb.org/t/p/w500//wCvKPiBvLncscbhBUuZs7UWCIo9.jpg"
        },
        {
            "id": 3372,
            "movie_db_id": 24575,
            "movie_title": "Raise the Titanic",
            "release_date": "1980-08-01T04:00:00.000Z",
            "average_rating": "5.5",
            "genre": "Adventure",
            "overview": "To obtain a supply of a rare mineral, a ship raising operation is conducted for the only known source, the Titanic.",
            "img": "https://image.tmdb.org/t/p/w500//vldLBVSl4UeaJVykpZW9SW2Ob38.jpg"
        },
        {
            "id": 3380,
            "movie_db_id": 102041,
            "movie_title": "Titanic: The Final Word with James Cameron",
            "release_date": "2012-04-08T04:00:00.000Z",
            "average_rating": "7.8",
            "genre": "Documentary",
            "overview": "James Cameron brings together some the worlds leading Titanic experts, including engineers, naval architects, artists and historians, to solve the lingering mysteries of why and how the unsinkable ship sank.",
            "img": "https://image.tmdb.org/t/p/w500//kSxlNuZjY6qu3QHri6RAaVxKm2U.jpg"
        },
        {
            "id": 1184,
            "movie_db_id": 12155,
            "movie_title": "Alice in Wonderland",
            "release_date": "2010-03-03T05:00:00.000Z",
            "average_rating": "6.6",
            "genre": "Family",
            "overview": "Alice, an unpretentious and individual 19-year-old, is betrothed to a dunce of an English nobleman. At her engagement party, she escapes the crowd to consider whether to go through with the marriage and falls down a hole in the garden after spotting an unusual rabbit. Arriving in a strange and surreal place called Underland, she finds herself in a world that resembles the nightmares she had as a child, filled with talking animals, villainous queens and knights, and frumious bandersnatches. Alice realizes that she is there for a reason – to conquer the horrific Jabberwocky and restore the rightful queen to her throne.",
            "img": "https://image.tmdb.org/t/p/w500//20pkC7yJdCV4J1IMKfsCT9QU7zV.jpg"
        },
        {
            "id": 1186,
            "movie_db_id": 30923,
            "movie_title": "Alice in Wonderland",
            "release_date": "1999-02-28T05:00:00.000Z",
            "average_rating": "6.3",
            "genre": "Fantasy",
            "overview": "Alice follows a white rabbit down a rabbit-hole into a whimsical Wonderland, where she meets characters like the delightful Cheshire Cat, the clumsy White Knight, a rude caterpillar, and the hot-tempered Queen of Hearts and can grow ten feet tall or shrink to three inches. But will she ever be able to return home$1",
            "img": "https://image.tmdb.org/t/p/w500//9jvju9GUCzu2EWB0LyUbaa76FKj.jpg"
        },
        {
            "id": 1188,
            "movie_db_id": 35109,
            "movie_title": "Alice in Wonderland",
            "release_date": "1966-12-26T05:00:00.000Z",
            "average_rating": "7.7",
            "genre": "Fantasy",
            "overview": "Alice in Wonderland (1966) is a BBC television play based on Alices Adventures in Wonderland by Lewis Carroll. It was directed by Jonathan Miller, then most widely known for his appearance in the long-running satirical revue Beyond the Fringe.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1190,
            "movie_db_id": 25694,
            "movie_title": "Alice in Wonderland",
            "release_date": "1933-12-22T05:00:00.000Z",
            "average_rating": "6",
            "genre": "Action",
            "overview": "On a boring winter afternoon, Alice dreams, that shes visiting the land behind the mirror. This turns out to be a surrealistic nightmare, with all sorts of strange things happening to her, like changing her size or playing croquet with flamingos.",
            "img": "https://image.tmdb.org/t/p/w500//g1LcYjBXzjqNrGXYTRll1jNRTfb.jpg"
        },
        {
            "id": 1192,
            "movie_db_id": 135361,
            "movie_title": "Alice In Wonderland",
            "release_date": "2010-02-23T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Adventure",
            "overview": "This production was originally broadcast on radio back in the 1940s. It was put on DVD with new animation.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1194,
            "movie_db_id": 166829,
            "movie_title": "Alice in Wonderland",
            "release_date": "1931-09-29T05:00:00.000Z",
            "average_rating": "3.7",
            "genre": "Comedy",
            "overview": "The first talking movie version of Alice in Wonderland, produced in Fort Lee, New Jersey, in 1931, two years before Paramounts all-star production. Ruth Gilbert stars as Lewis Carrolls heroine in this black and white featurette (running under an hour) directed by Bud Pollard.",
            "img": "https://image.tmdb.org/t/p/w500//nrthmTxb2z2vYtDA3ow3F3wCard.jpg"
        },
        {
            "id": 1197,
            "movie_db_id": 71999,
            "movie_title": "Studio 100 sprookjes musicals - Alice in Wonderland met K3",
            "release_date": "2011-03-28T04:00:00.000Z",
            "average_rating": "5.3",
            "genre": "Family",
            "overview": "",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1201,
            "movie_db_id": 686114,
            "movie_title": "Alice In Wonderland",
            "release_date": "1985-12-09T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "Alice (Natalie Gregory) is in Looking Glass Land, where she meets many Looking Glass creatures and attempts to avoid the Jabberwocky (Tom McLoughlin), a monster that appears due to her being afraid.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2361,
            "movie_db_id": 324283,
            "movie_title": "Ktown Cowboys",
            "release_date": "2015-03-15T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Comedy",
            "overview": "Based on the wildly successful web-series of the same name, Ktown Cowboys is a bro-mantic dramedy that follows a group of ball-busting, hard-partying friends wrestling with their evolution into adulthood. As their individual struggles come to light, the group of friends band together in Koreatown and through late nights at seedy after-hour soju bars, karaoke drinking girls and even a stint in jail, each emerges as a better version of himself.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3019,
            "movie_db_id": 314712,
            "movie_title": "Spenser: Pale Kings and Princes",
            "release_date": "1994-01-02T05:00:00.000Z",
            "average_rating": "5",
            "genre": "Action",
            "overview": "When Spenser (Robert Urich), his psychologist girlfriend, Susan Silverman (Barbara Williams), and his right-hand man, Hawk (Avery Brooks), investigate a brutal murder in a quaint New England town, they discover plenty of illegal activity and cocaine. This 1994 made-for-television movie brings many of the beloved characters from the 1980s drama series (based on the books by Robert B. Parker) back to the small screen.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3026,
            "movie_db_id": 538706,
            "movie_title": "Nuits de princes",
            "release_date": "1938-01-27T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Drama",
            "overview": "No overviwe found",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3373,
            "movie_db_id": 71235,
            "movie_title": "Titanic: The Legend Goes On...",
            "release_date": "2001-07-24T04:00:00.000Z",
            "average_rating": "2.1",
            "genre": "Animation",
            "overview": "An animated retelling of the worst passenger ship disaster in history. In this version, love blossoms between the upper-class Sir William and the blue-collar Angelica, who is hoping to find romance in America. At the same time, there are also a number of animal passengers, including talking dogs, cats and mice, who are also looking forward to arriving in the New World.",
            "img": "https://image.tmdb.org/t/p/w500//4Sddw1BFQFHOIQZ3DY7QS0mGnVe.jpg"
        },
        {
            "id": 3374,
            "movie_db_id": 421657,
            "movie_title": "Inside the Titanic",
            "release_date": "2012-03-22T04:00:00.000Z",
            "average_rating": "8",
            "genre": "Documentary",
            "overview": "An ambitious factual drama that reveals moment by moment exactly how the Titanic sank, telling the untold stories of the engineers and stokers who battled the icy water.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1185,
            "movie_db_id": 12092,
            "movie_title": "Alice in Wonderland",
            "release_date": "1951-07-28T04:00:00.000Z",
            "average_rating": "7.1",
            "genre": "Adventure",
            "overview": "On a golden afternoon, young Alice follows a White Rabbit, who disappears down a nearby rabbit hole. Quickly following him, she tumbles into the burrow - and enters the merry, topsy-turvy world of Wonderland! Memorable songs and whimsical escapades highlight Alices journey, which culminates in a madcap encounter with the Queen of Hearts - and her army of playing cards!",
            "img": "https://image.tmdb.org/t/p/w500//b4yiLlIFuiULuuLTxT0Pt1QyT6J.jpg"
        },
        {
            "id": 1187,
            "movie_db_id": 114364,
            "movie_title": "Alice in Wonderland",
            "release_date": "1988-01-01T05:00:00.000Z",
            "average_rating": "5.8",
            "genre": "Animation",
            "overview": "Its a whimsical romp through Wonderland when Alice falls down the rabbit hole and finds herself in a strange land filled with a fabulous menagerie of curious characters.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1189,
            "movie_db_id": 41278,
            "movie_title": "Alice in Wonderland",
            "release_date": "1903-10-17T05:00:00.000Z",
            "average_rating": "6.3",
            "genre": "Fantasy",
            "overview": "This is the first movie version of the famous story. Alice dozes in a garden, awakened by a dithering white rabbit in waistcoat with pocket watch. She follows him down a hole and finds herself in a hall of many doors.",
            "img": "https://image.tmdb.org/t/p/w500//jQf1fi7q0sRzlmGEiuXluoEsDiF.jpg"
        },
        {
            "id": 1191,
            "movie_db_id": 87300,
            "movie_title": "Alice in Wonderland",
            "release_date": "1915-01-15T05:00:00.000Z",
            "average_rating": "5.1",
            "genre": "Fantasy",
            "overview": "A German adaptation of the classic Lewis Carroll story.",
            "img": "https://image.tmdb.org/t/p/w500//1TQhhs7sZtksJYPeRtzislQqL6R.jpg"
        },
        {
            "id": 1193,
            "movie_db_id": 492161,
            "movie_title": "Alice in Wonderland",
            "release_date": "1986-01-05T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "One of the most well-known stories begins one golden summer afternoon. Alice is sitting on a riverbank with her sister when a fully-dressed, talking rabbit runs past her. She follows the rabbit down the hole and enters a nonsensical world where it seems the normal rules of logic do not apply. In Wonderland, Alice participates in a winner-less race, alternates between being tiny and giant, hears riddles at a mad tea party, plays croquet with live flamencos, and attends a trial where the Knave of Hearts is accused of stealing the Queens tarts. Join Alice as she encounters the Hatter, the Cheshire Cat, and others as she makes her way through Wonderland.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1195,
            "movie_db_id": 210075,
            "movie_title": "Alice in Wonderland",
            "release_date": "1995-07-30T04:00:00.000Z",
            "average_rating": "5",
            "genre": "Animation",
            "overview": "A girl follows a rabbit into a magical world.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1196,
            "movie_db_id": 456380,
            "movie_title": "Alice In Wonderland",
            "release_date": "1982-01-01T05:00:00.000Z",
            "average_rating": "6",
            "genre": "Western",
            "overview": "A young girl named Alice falls down a rabbit-hole and finds herself in Wonderland, a fantasy land of strange characters and ideas.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1199,
            "movie_db_id": 407587,
            "movie_title": "Alice in Wonderland",
            "release_date": "1955-10-22T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Fantasy",
            "overview": "A young girl named Alice falls down a rabbit-hole and finds herself in Wonderland, a fantasy land of strange characters and ideas.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2363,
            "movie_db_id": 533654,
            "movie_title": "Desperate Cowboys",
            "release_date": "2018-04-28T04:00:00.000Z",
            "average_rating": "9.5",
            "genre": "Crime",
            "overview": "An ailing attorney, a relentless bail bondsman and a ruthless cowboy cross paths in the most dire of circumstances.",
            "img": "https://image.tmdb.org/t/p/w500//cIVzC3tOcczvEuLh0NFk931YGu6.jpg"
        },
        {
            "id": 3021,
            "movie_db_id": 639576,
            "movie_title": "Princes et Vagabonds",
            "release_date": "2019-11-06T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Documentary",
            "overview": "",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3031,
            "movie_db_id": 58170,
            "movie_title": "MIKA: Live au Parc des Princes Paris",
            "release_date": "2008-07-04T04:00:00.000Z",
            "average_rating": "10",
            "genre": "Music",
            "overview": "Live Parc des Princes Paris (2008) is Mikas second live album. It is a one-off stadium show with a crowd of 55,000 movieed at Paris on 4 July 2008. The DVD also features a documentary following the initial idea of the show through to the production. In Bonus Features it includes the music video for the song Lollipop, a live performance of Grace Kelly and the making-of the design and others in the show",
            "img": "https://image.tmdb.org/t/p/w500//fTDznfTPgbM4ixcww4tSier2oEm.jpg"
        },
        {
            "id": 3366,
            "movie_db_id": 597,
            "movie_title": "Titanic",
            "release_date": "1997-11-18T05:00:00.000Z",
            "average_rating": "7.8",
            "genre": "Drama",
            "overview": "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanics departure through to its death—on its first and last voyage—on April 15, 1912.",
            "img": "https://image.tmdb.org/t/p/w500//6VmFqApQRyZZzmiGOQq2C92jyvH.jpg"
        },
        {
            "id": 3375,
            "movie_db_id": 44310,
            "movie_title": "The Legend of the Titanic",
            "release_date": "1999-01-01T05:00:00.000Z",
            "average_rating": "3.1",
            "genre": "Animation",
            "overview": "Old Grandpa mouse tells to his grandchildren the real story of the Titanic disaster, including evil sharks, a giant octopus, and an evil whaling scheme.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1198,
            "movie_db_id": 439062,
            "movie_title": "K3 - Alice in Wonderland",
            "release_date": "2011-03-13T05:00:00.000Z",
            "average_rating": "8",
            "genre": "Family",
            "overview": "Karen, Kristel and Josje bored and go with the three of us to the movies. Once at the cinema, the surprises and do nothing is what it seems.  The girls end up in a world called Wonderland. There they are the most against strange creatures, such as a talking caterpillar, the heart king and his wicked queen, the mad hatter, the helpful twins and a white rabbit. K3 end up in one big adventure where one crazy situations succeeds another. K3 can ever escape from this strange world$1 Alice in Wonderland takes you on a magical adventure in a wonderful world of fantasy. You go with Karen, Kristel and Josje it$2",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1202,
            "movie_db_id": 138541,
            "movie_title": "Unsuk Chin: Alice in Wonderland",
            "release_date": "2008-04-29T04:00:00.000Z",
            "average_rating": "0",
            "genre": "TV movie",
            "overview": "A live movieing of the premier of Korean composer Unsuk Chins Alice in Wonderland opera at National Theater Munich in June 2007. It is a modern opera based on Lewis Carrolls fantasy novel of the same name. The amazing characters Alice meets are portrayed with a colorful combination of puppets and singer-actors.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2364,
            "movie_db_id": 449563,
            "movie_title": "Isnt It Romantic",
            "release_date": "2019-02-13T05:00:00.000Z",
            "average_rating": "6.2",
            "genre": "Comedy",
            "overview": "For a long time, Natalie, an Australian architect living in New York City, had always believed that what she had seen in rom-coms is all fantasy. But after thwarting a mugger at a subway station only to be knocked out while fleeing, Natalie wakes up and discovers that her life has suddenly become her worst nightmare—a romantic comedy—and she is the leading lady.",
            "img": "https://image.tmdb.org/t/p/w500//fPwJmIg6CVNNXUJvL1wgeexzwEp.jpg"
        },
        {
            "id": 3022,
            "movie_db_id": 592801,
            "movie_title": "Happy Princes",
            "release_date": "2018-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Documentary",
            "overview": "Out of the heart of a favela in Rio de Janeiro up to the Statue of Christ the Redeemer, the art of theatre spreads the wings of a group of children for a free flight over their fears, their dreams, and the extreme contradictions of their home city where guns and drums are beating on the same frenzied rhythm.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3030,
            "movie_db_id": 293561,
            "movie_title": "William and Harry: The Brother Princes",
            "release_date": "2010-12-11T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Music",
            "overview": "Prince William and Prince Harry discuss their charity work in Southern Africa and their bond as brothers.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3369,
            "movie_db_id": 213362,
            "movie_title": "Reflections on Titanic",
            "release_date": "2012-09-10T04:00:00.000Z",
            "average_rating": "7",
            "genre": "Documentary",
            "overview": "An enthralling and fast-paced four-part documentary feature that covers the making of one of the last major Hollywood epics; Titanic. Cast and crew speak on setting the sinking of the ship against a classic romance. The feature also examines casting and the young couple headlining the film, DiCaprios and Winslets on-set friendship and their differing acting styles, the expansive sets and filming locations, the authenticity of the recreated ship, James Camerons work and dedication, and budgeting. And many more aspects of the film are overviewed.",
            "img": "https://image.tmdb.org/t/p/w500//mEoU71g0SjTDEiMTyRj1bV2EfIp.jpg"
        },
        {
            "id": 3365,
            "movie_db_id": 11021,
            "movie_title": "Titanic",
            "release_date": "1943-11-10T04:00:00.000Z",
            "average_rating": "6.2",
            "genre": "Action",
            "overview": "This little-known German film retells the true story of the British ocean liner that met a tragic fate. Ernst Fritz Fürbringer plays the president of the White Star Line, who unwisely pressed the Titanics captain (Otto Wernicke) to make the swiftest possible crossing to New York. Interestingly, director Herbert Selpin was arrested by the Gestapo during this films production, and German censors banned the film for its scenes of panic and terror.",
            "img": "https://image.tmdb.org/t/p/w500//edHgXEtPbyVIQ7xKb1cvJJqTVhA.jpg"
        },
        {
            "id": 3368,
            "movie_db_id": 463397,
            "movie_title": "Nazi Titanic",
            "release_date": "2012-04-14T04:00:00.000Z",
            "average_rating": "7",
            "genre": "TV Movie",
            "overview": "During a bizarre chapter of WWII, Nazi propaganda minister Joseph Goebbels decided to make a movie based on the sinking of the Titanic. This epic film was so large in scale that the Nazis were forced to divert men, material and ships from the war effort in order to complete it. Titanic was filmed aboard cruise ship SS Cap Arcona in the Baltic Sea. The movie’s director Herbert Selpin was arrested by the Gestapo over comments he made about the ship’s crew and he was questioned by Goebbels. Selpin was found dead the next day in his cell. The Gestapo’s verdict was suicide. Titanic never received the impressive premiere that Goebbels intended, being first shown in Nazi-occupied Paris in 1943. We reveal this little known but fascinating story by looking at the making of the film, as well as the fate of the German ship Cap Arcona.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3377,
            "movie_db_id": 4240,
            "movie_title": "Titanic 2000",
            "release_date": "1999-01-01T05:00:00.000Z",
            "average_rating": "3.1",
            "genre": "Comedy",
            "overview": "The luxury liner Titanic 2000 has set sail on its maiden voyage, and one of the passengers is the vampire Vladamina. Vladamina is searching for a woman she can turn into a vampire queen, and frustrated rock groupie Shari looks to be a perfect target. As various people get seduced and/or killed as the liner continues on its doomed voyage, Shari must chose between eternity as a living dead sex slave or a frigid grave at the bottom of the ocean.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3381,
            "movie_db_id": 115872,
            "movie_title": "The Chambermaid on the Titanic",
            "release_date": "1997-10-10T04:00:00.000Z",
            "average_rating": "6",
            "genre": "Drama",
            "overview": "Horty, a French foundry worker, wins a contest and is sent to see the sailing of the Titanic. In England, Marie, saying she is a chambermaid on the Titanic and cannot get a room, asks to share his room. They do, chastely; when he awakens, she is gone, but he sees her at the sailing and gets a photo of her. When he returns home, he suspects that his wife Zoe has been sleeping with Simeon, the foundry owner. Horty goes to the bar, where his friends get him drunk and he starts telling an erotic fantasy of what happened with him and Marie, drawing a larger audience each night.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3382,
            "movie_db_id": 46940,
            "movie_title": "Secrets of the Titanic",
            "release_date": "1986-08-07T04:00:00.000Z",
            "average_rating": "6.7",
            "genre": "Documentary",
            "overview": "Dr. Robert Ballard of Woods Hole Oceanographic Institute and his research team become the first undersea explorers to locate, photograph, and explore the wreckage of the ill-fated HMS Titanic, which sank on its maiden voyage 2 1/2 mile deep in the icy waters of the Atlantic in 1912, taking 1500 passengers and crew with it to a watery grave. Utilizing dazzling state-of-the art equipment and cutting edge expertise they movie the decaying remains of the ocean liner once thought unsinkable.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1200,
            "movie_db_id": 423971,
            "movie_title": "Alice in Wonderland",
            "release_date": "2010-01-01T05:00:00.000Z",
            "average_rating": "6",
            "genre": "Western",
            "overview": "An adaptation of the 1886 musical “Alice in Wonderland: A Dream Play for Children” by Henry Saville Clark and Walter Slaughter, Fotopoulos’ feature length film propels the Clark/Slaughter score into the 21st century digital age. Sculptures, drawings, text, and original music are used to explore the late 19th century’s evolution of painting, literature, and theatre into early photography and moving pictures. The piece probes the interplay of art and science and in exploring these ideas certain lives and themes are touched upon – the relationship between John Ruskin and Lewis Carroll, Ruskin’s theories on drawing, Thomas Eakins’ painting and his use of photography, the burgeoning of early cinema with Eadweard Muybridge and Etienne-Jules Marey, notions of amateurism and professionalism in art and the archetype of the condemned artist. The work is presented in two acts, remaining faithful to the musical’s original construction based upon Carroll’s narratives.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2365,
            "movie_db_id": 244538,
            "movie_title": "Isnt It Romantic$1",
            "release_date": "1948-10-06T05:00:00.000Z",
            "average_rating": "7",
            "genre": "Comedy",
            "overview": "Three sisters find romance in post-Civil War Indiana.",
            "img": "https://image.tmdb.org/t/p/w500//nYNO6PGqC4X7O5ejLpd6G27zLrN.jpg"
        },
        {
            "id": 3024,
            "movie_db_id": 103834,
            "movie_title": "The Frog Princes",
            "release_date": "2011-06-17T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Documentary",
            "overview": "A Montreal-based theater troupe is working tirelessly to put on a play. The challenges they face are also a part of the usual drama behind any live show. Theres the backstage politics, the forgotten lines, the missed cues, the romances and the rivalries. But for this troupe, the stakes are a bit higher - each cast member faces intellectual, developmental and mental health disabilities, ranging from Down syndrome to autism to schizophrenia",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3371,
            "movie_db_id": 16535,
            "movie_title": "Titanic",
            "release_date": "1953-04-11T05:00:00.000Z",
            "average_rating": "6.5",
            "genre": "Action",
            "overview": "Unhappily married, Julia Sturges decides to go to America with her two children on the unsinkable Titanic. Her husband, Richard also arranges passage on the luxury liner so as to have custody of their two children. All this fades to insignificance once the ship hits an iceberg.",
            "img": "https://image.tmdb.org/t/p/w500//3oShsRvAyZiQQ5lP2hszWN9Ri0b.jpg"
        },
        {
            "id": 3378,
            "movie_db_id": 287347,
            "movie_title": "Titanic: The Aftermath",
            "release_date": "2012-04-01T04:00:00.000Z",
            "average_rating": "0",
            "genre": "History",
            "overview": "Explores what happened after the Titanic sank: the lives the disaster affected and the changes it brought to sea travel.",
            "img": "https://image.tmdb.org/t/p/w500//yFD05fZjJKgZ4t7LGJB2ILPdZ2X.jpg"
        },
        {
            "id": 1203,
            "movie_db_id": 368749,
            "movie_title": "Alice in Wonderland",
            "release_date": "1983-10-03T04:00:00.000Z",
            "average_rating": "8",
            "genre": "Comedy",
            "overview": "Adaptation of the Lewis Carroll novel",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2388,
            "movie_db_id": 194662,
            "movie_title": "Birdman or (The Unexpected Virtue of Ignorance)",
            "release_date": "2014-08-27T04:00:00.000Z",
            "average_rating": "7.5",
            "genre": "Comedy",
            "overview": "A fading actor best known for his portrayal of a popular superhero attempts to mount a comeback by appearing in a Broadway play. As opening night approaches, his attempts to become more altruistic, rebuild his career, and reconnect with friends and family prove more difficult than expected.",
            "img": "https://image.tmdb.org/t/p/w500//s0OrExdg7i3RLR7oqzHRk4q2kL4.jpg"
        },
        {
            "id": 2390,
            "movie_db_id": 598546,
            "movie_title": "Birdman",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Documentary",
            "overview": "This mockumentary follows the life of high-school senior and local legend Peter LaBelle.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2392,
            "movie_db_id": 435092,
            "movie_title": "Birdman",
            "release_date": "2014-01-01T05:00:00.000Z",
            "average_rating": "4",
            "genre": "Documentary",
            "overview": "A portrait of Robert, a troubled but poetic soul struggling with his purgatorial existence in a hackney scrapyard.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2394,
            "movie_db_id": 518207,
            "movie_title": "birdman",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "this is about birdman",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2396,
            "movie_db_id": 242506,
            "movie_title": "The Balgonie Birdman",
            "release_date": "1991-12-28T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "This film tells the story of the efforts of the first Canadian to attempt to fly a human powered heavier than air aircraft",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2398,
            "movie_db_id": 356233,
            "movie_title": "Bird-Man",
            "release_date": "2010-08-26T04:00:00.000Z",
            "average_rating": "10",
            "genre": "Documentary",
            "overview": "The vertigos in the urban landscape take the Bird-Man back to his origins, in a metaphor about life cycles. Bird-Man is a film from the poetic nature of Brazilian singer, Ney Matogrosso. During the 1970s dictatorship, he broke sexual taboos with a strange behavior on stage and became one of the most famous brazilian singers. Inspired in Cassiano Ricardos concrete poems and the experimental music of Neys repertoire, Bird-Man explores a sound and visual lyrical aesthetic of high contrasts that approximates man to natures feelings.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3023,
            "movie_db_id": 494728,
            "movie_title": "Princes In Exile",
            "release_date": "1991-11-27T05:00:00.000Z",
            "average_rating": "7",
            "genre": "Drama",
            "overview": "Diagnosed as having a brain tumor, seventeen-year-old Ryan is angrily resigned to the fact that he may not live to see another year. With time running out, he clings to two goals: publishing his journal and losing his virginity. But as Ryan finds fresh strength from his new friends optimism and defiant refusal to surrender to cancer, his perspective changes.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3370,
            "movie_db_id": 86938,
            "movie_title": "S.O.S. Titanic",
            "release_date": "1979-09-23T04:00:00.000Z",
            "average_rating": "6.2",
            "genre": "History",
            "overview": "The Titanic disaster is depicted as seen through the eyes of one couple in each of the three classes on board.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3379,
            "movie_db_id": 102370,
            "movie_title": "Saving the Titanic",
            "release_date": "2012-04-15T04:00:00.000Z",
            "average_rating": "7.8",
            "genre": "Documentary",
            "overview": "In the hours after the Titanic struck an iceberg 100 years ago, a team of shipbuilders and engineers raced against time to save the stricken vessel.  Based on eye-witness accounts, this film reveals what went on below decks in the hours before the Titanic sank, telling the previously relatively unheralded stories of engineers who fought courageously to hold back the power of the sea and keep the power systems running, even when they learned that all was lost.  Most of these men died but their actions bought enough time to save many lives.  This drama-documentary tells a poignant story of self-sacrifice by the Titanics engineers, stokers and firemen in the face of impending death.",
            "img": "https://image.tmdb.org/t/p/w500//v6kUC2dsDwSfhwCWdAgldXB7Knu.jpg"
        },
        {
            "id": 1240,
            "movie_db_id": 40662,
            "movie_title": "Batman: Under the Red Hood",
            "release_date": "2010-07-27T04:00:00.000Z",
            "average_rating": "7.7",
            "genre": "Action",
            "overview": "Batman faces his ultimate challenge as the mysterious Red Hood takes Gotham City by firestorm. One part vigilante, one part criminal kingpin, Red Hood begins cleaning up Gotham with the efficiency of Batman, but without following the same ethical code.",
            "img": "https://image.tmdb.org/t/p/w500//kvnzJ4s6RnjJZe1DhOjeML0Jwbu.jpg"
        },
        {
            "id": 2389,
            "movie_db_id": 898,
            "movie_title": "Birdman of Alcatraz",
            "release_date": "1962-07-03T04:00:00.000Z",
            "average_rating": "7.3",
            "genre": "Drama",
            "overview": "After killing a prison guard, convict Robert Stroud faces life imprisonment in solitary confinement. Driven nearly mad by loneliness and despair, Strouds life gains new meaning when he happens upon a helpless baby sparrow in the exercise yard and nurses it back to health. Despite having only a third grade education, Stroud goes on to become a renowned ornithologist and achieves a greater sense of freedom and purpose behind bars than most people find in the outside world.",
            "img": "https://image.tmdb.org/t/p/w500//f8MpDsM0vNG2WYtV7ZpwiZoTFoW.jpg"
        },
        {
            "id": 2391,
            "movie_db_id": 554115,
            "movie_title": "Harvey Birdman, Attorney General",
            "release_date": "2018-10-15T04:00:00.000Z",
            "average_rating": "8.5",
            "genre": "Animation",
            "overview": "Newly appointed Attorney General, Harvey Birdman, attempts to use his position to get President Phil Ken Sebben removed from office.",
            "img": "https://image.tmdb.org/t/p/w500//bOAvotGaQedrxZ9LbMBSiDkqGDA.jpg"
        },
        {
            "id": 2393,
            "movie_db_id": 679921,
            "movie_title": "The Birdman",
            "release_date": "2020-01-20T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Documentary",
            "overview": "The story of an ornithologist who’s remarkable work is safeguarding the future of not just birds but reptiles, mammals and one day perhaps even humans. When scientists declared the Mauritius Kestrel beyond salvation, one young biology graduate refused to let it become another obsolete species.",
            "img": "https://image.tmdb.org/t/p/w500//3oWNc89RrowCMWuhJshYOJyCNUI.jpg"
        },
        {
            "id": 2395,
            "movie_db_id": 562517,
            "movie_title": "Birdman: All-Access (A View From the Wings)",
            "release_date": "2015-05-18T04:00:00.000Z",
            "average_rating": "8",
            "genre": "Documentary",
            "overview": "A making-of documentary for the 2014 film Birdman.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2397,
            "movie_db_id": 466930,
            "movie_title": "Descent Into the Maelstrom: The Untold Story of Radio Birdman",
            "release_date": "2017-07-20T04:00:00.000Z",
            "average_rating": "6",
            "genre": "Music",
            "overview": "Documentary that chronicles the career of the legendary Australian punk band Radio Birdman.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3020,
            "movie_db_id": 336544,
            "movie_title": "Princes of the Yen",
            "release_date": "2014-11-05T05:00:00.000Z",
            "average_rating": "5",
            "genre": "Documentary",
            "overview": "Set in 20th Century Japan the documentary explores the role and power of Central Banks and how they can be used to change a countrys economic political and social structures A documentary adaption off the book by Professor Richard Werner.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3032,
            "movie_db_id": 621719,
            "movie_title": "Les Princes de la ville",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Music",
            "overview": "",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3364,
            "movie_db_id": 44918,
            "movie_title": "Titanic 2",
            "release_date": "2010-08-07T04:00:00.000Z",
            "average_rating": "3.5",
            "genre": "Action",
            "overview": "On the 100th anniversary of the original voyage, a modern luxury liner christened Titanic 2, follows the path of its namesake. But when a tsunami hurls an ice berg into the new ships path, the passengers and crew must fight to avoid a similar fate.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3376,
            "movie_db_id": 198901,
            "movie_title": "Titanic: 100 Years On",
            "release_date": "2012-06-01T04:00:00.000Z",
            "average_rating": "7.3",
            "genre": "Documentary",
            "overview": "The unsinkable floating palace set sail from Southampton on 10th April 1912 on her maiden voyage to New York. An iceberg ended this monumental journey 5 days later. Only 705 of the passengers and crew survived. This program features an exclusive look at the Sea City Museum Titanic Exhibit in Southampton, interviews from both survivors and the cast of the blockbuster film.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1282,
            "movie_db_id": 43641,
            "movie_title": "Superman/Shazam!: The Return of Black Adam",
            "release_date": "2010-11-09T05:00:00.000Z",
            "average_rating": "7.2",
            "genre": "Action",
            "overview": "Chosen the world’s protector against the Seven Deadly Enemies of Man – pride, envy, greed, hatred, selfishness, laziness and injustice – young Billy Batson accepts his destiny as Captain Marvel. Battling alongside Superman against nefarious Black Adam, Billy soon discovers the challenge super heroes ultimately face: is it revenge or justice$1",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2399,
            "movie_db_id": 550693,
            "movie_title": "Birdman Tale",
            "release_date": "2004-02-01T05:00:00.000Z",
            "average_rating": "6",
            "genre": "Drama",
            "overview": "Set against the background of Papuas struggle for independence. Arnold, a young Papuan teenager, meets a young woman at the port and becomes obsessed with the desire to kiss her. At the same time, Arnolds father is being hunted down for his political activities.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3292,
            "movie_db_id": 3989,
            "movie_title": "Team America: World Police",
            "release_date": "2004-01-14T05:00:00.000Z",
            "average_rating": "6.7",
            "genre": "Adventure",
            "overview": "Team America World Police follows an international police force dedicated to maintaining global stability. Learning that dictator Kim Jong il is out to destroy the world, the team recruits Broadway star Gary Johnston to go undercover. With the help of Team America, Gary manages to uncover the plan to destroy the world. Will Team America be able to save it in time$1 It stars… Samuel L Jackson, Tim Robbins, Sean Penn, Michael Moore, Helen Hunt, Matt Damon, Susan Sarandon, George Clooney, Danny Glover, Ethan Hawke, Alec Baldwin… or does it$2",
            "img": "https://image.tmdb.org/t/p/w500//5jQEcjppZnQnBAVN10uWPk6IKUK.jpg"
        },
        {
            "id": 3309,
            "movie_db_id": 44642,
            "movie_title": "The Police: Synchronicity Concert",
            "release_date": "2005-09-19T04:00:00.000Z",
            "average_rating": "0",
            "genre": "Music",
            "overview": "Synchronicity tour by the Police, movieed at the Omni in Atlanta, GA, Nov. 1983.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1584,
            "movie_db_id": 12536,
            "movie_title": "Home Alone 4",
            "release_date": "2002-11-03T05:00:00.000Z",
            "average_rating": "4.3",
            "genre": "Comedy",
            "overview": "Kevin McCallisters parents have split up. Now living with his mom, he decides to spend Christmas with his dad at the mansion of his fathers rich girlfriend, Natalie. Meanwhile robber Marv Merchants, one of the villains from the first two movies, partners up with a new criminal named Vera to hit Natalies mansion.",
            "img": "https://image.tmdb.org/t/p/w500//6gvocf4kU9qJyUVZEDveOtLkaMu.jpg"
        },
        {
            "id": 1587,
            "movie_db_id": 772,
            "movie_title": "Home Alone 2: Lost in New York",
            "release_date": "1992-11-19T05:00:00.000Z",
            "average_rating": "6.6",
            "genre": "Comedy",
            "overview": "Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dads credit card—despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, hes determined to foil their plans to rob a toy store on Christmas eve.",
            "img": "https://image.tmdb.org/t/p/w500//1uHTuwx5h9T3XzsXijMMKybDFvZ.jpg"
        },
        {
            "id": 1589,
            "movie_db_id": 771,
            "movie_title": "Home Alone",
            "release_date": "1990-11-09T05:00:00.000Z",
            "average_rating": "7.3",
            "genre": "Comedy",
            "overview": "Eight-year-old Kevin McCallister makes the most of the situation after his family unwittingly leaves him behind when they go on Christmas vacation. But when a pair of bungling burglars set their sights on Kevins house, the plucky kid stands ready to defend his territory. By planting booby traps galore, adorably mischievous Kevin stands his ground as his frantic mother attempts to race home before Christmas Day.",
            "img": "https://image.tmdb.org/t/p/w500//dlU5a08RuNrzSK3ot2jECs7PMO1.jpg"
        },
        {
            "id": 1591,
            "movie_db_id": 361393,
            "movie_title": "Home/Alone",
            "release_date": "2015-09-24T04:00:00.000Z",
            "average_rating": "3.3",
            "genre": "Horror",
            "overview": "A girl spends a night home alone for the very first time.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1593,
            "movie_db_id": 273219,
            "movie_title": "Home Alone da Riber",
            "release_date": "2002-12-25T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Comedy",
            "overview": "Rudolf is imprisoned for a crime he did not commit. He attempted to escape many times but was unsuccessfull, he realizes that he is in for the long haul and decides that his wife Sandra should remarry for the sake of their children Melody and Mark who have been made to believe anyway that he is already dead. Many years has been passed he was informed that the real culprit has been caught and he is being released. However, instead of being happy, he is saddened by the fact that he cannot go back to his family anymore. Nevertheless he pretends to be a piano tuner so that he can visit his children.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1595,
            "movie_db_id": 420822,
            "movie_title": "Home Alone on Halloween",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "A girl feels uneasy on Halloween.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1598,
            "movie_db_id": 666544,
            "movie_title": "The Making of Home Alone 2: Lost in New York",
            "release_date": "1992-11-15T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Comedy",
            "overview": "A special featuring a behind-the-scenes look at the making of the film, Home Alone 2: Lost in New York.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 1601,
            "movie_db_id": 454533,
            "movie_title": "Home Alone",
            "release_date": "1996-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Animation",
            "overview": "Its the first time for the Cat to be all by itself at home. This Cat does not have a name yet and nobody knows whether it is female or male. And it has two faces, one is very sensitive and the other is rather naughty.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 2400,
            "movie_db_id": 394750,
            "movie_title": "Akado Suzunosuke vs. the Birdman with 3 Eyes",
            "release_date": "1958-03-11T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Action",
            "overview": "Suzunosuke faces perhaps his wildest foes. This evil gang is lead by a one-eyed birdman and other demonic creatures.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        },
        {
            "id": 3293,
            "movie_db_id": 57382,
            "movie_title": "Halal State Security",
            "release_date": "2011-02-16T05:00:00.000Z",
            "average_rating": "4.5",
            "genre": "Comedy",
            "overview": "Someone is killing Parisians of Arab ethnicity. When an Algerian diplomat is murdered by the same assailant, two Algerian detectives are sent to help the French with the investigation and they have their own ways of doing things.",
            "img": "https://image.tmdb.org/t/p/w500//gYHwwJCZeoReYIpO2lBjh495ZPC.jpg"
        },
        {
            "id": 3291,
            "movie_db_id": 9336,
            "movie_title": "Police Academy",
            "release_date": "1984-03-22T05:00:00.000Z",
            "average_rating": "6.6",
            "genre": "Comedy",
            "overview": "New rules enforced by the Lady Mayoress mean that sex, weight, height and intelligence need no longer be a factor for joining the Police Force. This opens the floodgates for all and sundry to enter the Police Academy, much to the chagrin of the instructors. Not everyone is there through choice, though. Social misfit Mahoney has been forced to sign up as the only alternative to a jail sentence and it doesnt take long before he falls foul of the boorish Lieutenant Harris. But before long, Mahoney realises that he is enjoying being a police cadet and decides he wants to stay... while Harris decides he wants Mahoney out!",
            "img": "https://image.tmdb.org/t/p/w500//shmswotDbEdVc32BAe5NKKxh96.jpg"
        },
        {
            "id": 3303,
            "movie_db_id": 37455,
            "movie_title": "Police Python 357",
            "release_date": "1976-03-31T05:00:00.000Z",
            "average_rating": "6.7",
            "genre": "Action",
            "overview": "A tough but honest cop must clear his name after a corrupt colleague implicates him in a murder in this French thriller. Ferrot is a hard-as-nails police detective who is attracted to a beautiful woman named Sylvia. Sylvia, however, is having an affair with Ganay, who happens to be Ferrots superior on the force; Ganay happens to be married to Therese, who is handicapped. Sylvia is found murdered, and Ferrot is assigned to investigate; Ferrot is convinced that Ganay killed Sylvia because she wanted to end their relationship, but to his dismay, Ferrot discovers that the killer has placed a number of false clues that point the blame toward Ferrot.",
            "img": "https://image.tmdb.org/t/p/w500//aPRYklequ9arfulWQbFY08Rupt.jpg"
        },
        {
            "id": 3307,
            "movie_db_id": 83360,
            "movie_title": "North West Mounted Police",
            "release_date": "1940-10-22T05:00:00.000Z",
            "average_rating": "6.6",
            "genre": "Adventure",
            "overview": "Texas Ranger Dusty Rivers (Isnt that a contradiction in terms$1, another character asks him) travels to Canada in the 1880s in search of Jacques Corbeau, who is wanted for murder. He wanders into the midst of the Riel Rebellion, in which Métis (people of French and Native heritage) and Natives want a separate nation. Dusty falls for nurse April Logan, who is also loved by Mountie Jim Brett. Aprils brother is involved with Courbeaus daughter Louvette, which leads to trouble during the battles between the rebels and the Mounties. Through it all Dusty is determined to bring Corbeau back to Texas (and April, too, if he can manage it.)",
            "img": "https://image.tmdb.org/t/p/w500//uvi8T0pwrV5S7JOgNHlbcWnCtJw.jpg"
        },
        {
            "id": 519,
            "movie_db_id": 359512,
            "movie_title": "sukma hammet vs transformers",
            "release_date": "1900-01-01T05:00:00.000Z",
            "average_rating": "0",
            "genre": "Western",
            "overview": "sukma hammet vs transformers",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
        }
    ]

module.exports = {movieStore}