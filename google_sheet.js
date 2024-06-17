```javascript
async function fetchGoogleSheetData(sheetId, apiKey) {
    const base = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values:batchGet?ranges=Sheet1&key=${apiKey}`;
    const response = await fetch(base);
    const data = await response.json();
    
    const rows = data.valueRanges[0].values.slice(1); // Δεν παίρνουμε την πρώτη γραμμή (εκτός αν είναι επικεφαλίδα)
    
    return rows.map(row => ({
        name: row[0], // Όνομα Περιοχής
        coords: [parseFloat(row[1]), parseFloat(row[2])] // [latitude, longitude]
    }));
}
```
