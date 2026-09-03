// Datele pe care vrei să le trimiți către Google
const dateDeTrimis = {
  nume: "Ion Popescu",
  actiune: "salvare_date"
};

// Aici pui URL-ul lung copiat la Pasul 2
const urlGoogleScript = "https://script.google.com/macros/s/ID_UL_TAU_LUNG/exec";

// Trimitem datele către Google Apps Script
fetch(urlGoogleScript, {
  method: "POST",
  // IMPORTANT: Content-Type trebuie să fie text/plain pentru a evita eroarea CORS din browser
  headers: {
    "Content-Type": "text/plain;charset=utf-8", 
  },
  body: JSON.stringify(dateDeTrimis)
})
.then(response => response.json()) // Așteptăm răspunsul JSON de la Google
.then(data => {
  console.log("Răspuns de la Google:", data);
  // Aici înlocuiești logica din vechiul withSuccessHandler()
  if(data.status === "Succes") {
     alert(data.mesaj);
  }
})
.catch(error => {
  console.error("Eroare la conectare:", error);
});