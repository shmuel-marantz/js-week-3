import fs from "fs";
import input from "analiza-sync";

async function getPeopleList() {
  const response = await fetch(
    "https://spies-test-server-pink.vercel.app/people"
  );
  if (!response.ok) {
    throw new Error(`http error ${response.status}`);
  }
  const data = await response.text();
  fs.writeFile("PEOPLE.json", data, "utf8", (error) => {
    if (error) {
      console.error("Error writing file:", error);
      return;
    }
  });
}

async function getCallRecords() {
  const response = await fetch(
    "https://spies-test-server-pink.vercel.app/transcriptions"
  );
  if (!response.ok) {
    throw new Error(`http error ${response.status}`);
  }
  const data = await response.text();
  fs.writeFile("TRANSCRIPTIONS.json", data, "utf8", (error) => {
    if (error) {
      console.error("Error writing file:", error);
      return;
    }
  });
}

async function searchPeoplebyName() {
  fs.readFile("PEOPLE.json", "utf8", (error, data) => {
    const people = JSON.parse(data);
    let man = "";
    let inp = input("enter name\n");
    people.forEach((pe) => {
      if (pe.name === inp) {
        man = pe;
        return;
      }
    });
    if (man) {
      console.log(man);
    } else {
      console.log("The man does not exist");
    }
  });
}

async function searchPeoplebyAge() {
  fs.readFile("PEOPLE.json", "utf8", (error, data) => {
    const people = JSON.parse(data);
    let men = [];
    let inp = +input("enter Age\n");
    people.forEach((pe) => {
      if (pe.age === inp) {
        men.push(pe);
      }
    });
    if (men.length>0) {
      console.log(men);
    } else {
      console.log("Age does not exist");
    }
  });

}

async function findDangerousPeople(){
    fs.readFile("TRANSCRIPTIONS.json", "utf8", (error, data) => {
        const calls = JSON.parse(data);
        const ages = {}


        calls.forEach ((call) => {
        let con = call.content.split(' ')
        let count = 0

        con.forEach((wo) => {
            if (wo === "death" || wo === "knife" || wo === "bomb" || wo === "attack")
            {count++}})

        if (count) {
            call.age.toString()
        }

            
        
    })


        })
    }        
    