import React from 'react';

const clientsData = [
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
            "Synapse Product Development"
        ]
    },
    {
        category: "Government",
        clients: [
            "Centers for Disease Control and Prevention",
            "National Science Foundation",
            "NOAA",
            "US Department of Education",
            "US Department of Interior",
            "US Department of Veterans Affairs",
            "US Department of Agriculture",
            "National Institutes of Health"
        ]
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
            "California Landscape Conservation Cooperative"
        ]
    }
];

export default function ClientsList() {
    return (
        <div>
            <h1>Clients I've had the pleasure of working with</h1>
            {clientsData.map((category, index) => (
                <div key={index}>
                    <h2>{category.category}</h2>
                    <ul>
                        {category.clients.map((client, clientIndex) => (
                            <li key={clientIndex}>{client}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}