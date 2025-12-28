import React from "react";

export default function App() {
  const motel = {
    name: "Motel One Frankfurt-Römer",
    address: "Berliner Str. 55, Frankfurt",
  };

  const places = [
    {
      category: "🍛 Indian & Vegetarian",
      items: [
        {
          name: "Saravanaa Bhavan",
          desc: "South Indian vegetarian, similar to Sarabejavan",
          time: "12 min walk",
        },
        {
          name: "Veer Savarkar",
          desc: "Authentic Indian vegetarian",
          time: "10 min walk",
        },
      ],
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{motel.name}</h1>
      <p>{motel.address}</p>

      {places.map((place, idx) => (
        <div key={idx} style={{ marginTop: "30px" }}>
          <h2>{place.category}</h2>
          {place.items.map((item, itemIdx) => (
            <div key={itemIdx} style={{ marginLeft: "20px", marginBottom: "15px" }}>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <p><em>{item.time}</em></p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
