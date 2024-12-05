import React from "react";

const clientsData = [
  {
    category: "Government",
    clients: [
      "Centers for Disease Control and Prevention",
      "National Science Foundation",
      "National Oceanic and Atmospheric Administration",
      "US Department of Education",
      "US Department of Interior",
      "US Department of Veterans Affairs",
      "US Department of Agriculture",
      "National Institutes of Health",
    ],
  },
  {
    category: "Healthcare, Nonprofit, and Education",
    clients: [
      "University of Utah",
      "Johns Hopkins University",
      "Denver Regional Council of Government",
      "Blue Cross Blue Shield of MA Foundation",
      "Stanford University",
      "NACHA Electronic Payments Association",
      "Oregon Healthcare Q Corporation",
      "American Institutes for Research",
      "University of California, Los Angeles",
      "University of Texas",
      "Oregon Health Care Quality Corporation",
      "California Landscape Conservation Cooperative",
    ],
  },
  {
    category: "Private Sector",
    clients: [
      "Portland General Electric",
      "Mitsubishi",
      "Dover Corporation",
      "HMH Agency",
      "Daimler",
      "North Carolina Ports",
      "Univox Media",
      "Synapse Product Development",
    ],
  },
];

export default function ClientsList() {
  return (
    <>
      <h2>Clients</h2>
      {clientsData.map((category, index) => (
        <div>
          <h3>{category.category}</h3>
          <ul key={index}>
            {category.clients.map((client, clientIndex) => (
              <li key={clientIndex}>{client}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
