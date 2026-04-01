// Hero: JS widget embed (like Plaid Link)
export const widgetEmbed = `<script src="https://cdn.trellis.pet/link.js"></script>
<script>
  const handler = TrellisLink.create({
    token: 'link_token_from_server',
    onSuccess: (publicToken, metadata) => {
      // Send publicToken to your server
      console.log('Linked!', metadata.pet);
    },
    onExit: (err) => {
      if (err) console.error(err);
    }
  });

  document.getElementById('link-btn')
    .addEventListener('click', () => handler.open());
</script>`;

// API routes for carousel
export const apiRoutes = [
	{
		label: 'Pet Profile',
		method: 'GET',
		path: '/v1/pets/{id}',
		request: `curl https://api.trellis.pet/v1/pets/pet_a1b2c3 \\
  -H "Authorization: Bearer tpk_live_..."`,
		response: `{
  "id": "pet_a1b2c3",
  "name": "Naru",
  "species": "feline",
  "breed": "Domestic Shorthair",
  "date_of_birth": "2017-07-15",
  "sex": "female_spayed",
  "weight": { "value": 4.064, "unit": "kg" },
  "microchip_number": null,
  "rabies_tag": "20253532293",
  "owner": { "name": "Taryn R." }
}`
	},
	{
		label: 'Visits',
		method: 'GET',
		path: '/v1/pets/{id}/visits',
		request: `curl https://api.trellis.pet/v1/pets/pet_a1b2c3/visits \\
  -H "Authorization: Bearer tpk_live_..."`,
		response: `{
  "data": [
    {
      "date": "2025-03-21",
      "clinic": "Animal Medical Center of Chicago",
      "reason": "Annual wellness exam",
      "diagnoses": [
        { "condition": "travel anxiety", "status": "confirmed" },
        { "condition": "mild dental tartar", "severity": "mild" }
      ],
      "medications_prescribed": [
        { "name": "Gabapentin", "dosage": "100mg", "frequency": "as needed" }
      ]
    }
  ],
  "total": 6
}`
	},
	{
		label: 'Vaccinations',
		method: 'GET',
		path: '/v1/pets/{id}/vaccinations',
		request: `curl https://api.trellis.pet/v1/pets/pet_a1b2c3/vaccinations \\
  -H "Authorization: Bearer tpk_live_..."`,
		response: `{
  "data": [
    {
      "vaccine": "Rabies",
      "date_administered": "2025-03-21",
      "type": "booster",
      "duration": "3 year",
      "expires": "2028-03-21",
      "status": "current"
    },
    {
      "vaccine": "FVRCP",
      "date_administered": "2025-03-21",
      "type": "booster",
      "duration": "3 year",
      "expires": "2028-03-21",
      "status": "current"
    }
  ]
}`
	},
	{
		label: 'Conditions',
		method: 'GET',
		path: '/v1/pets/{id}/conditions',
		request: `curl https://api.trellis.pet/v1/pets/pet_a1b2c3/conditions \\
  -H "Authorization: Bearer tpk_live_..."`,
		response: `{
  "data": [
    {
      "condition": "travel anxiety",
      "status": "confirmed",
      "first_noted": "2025-03-21",
      "visits_referenced": 1
    },
    {
      "condition": "occasional urinary issues",
      "status": "historical",
      "first_noted": "2023-08-12",
      "visits_referenced": 2
    }
  ]
}`
	},
	{
		label: 'Insurance Flags',
		method: 'GET',
		path: '/v1/pets/{id}/insurance-flags',
		request: `curl https://api.trellis.pet/v1/pets/pet_a1b2c3/insurance-flags \\
  -H "Authorization: Bearer tpk_live_..."`,
		response: `{
  "pre_existing_mentions": [
    {
      "condition": "occasional urinary issues",
      "confidence": "medium",
      "source_context": "has had occasional urinary issues"
    }
  ],
  "vaccination_gaps": [],
  "care_gaps": [
    {
      "type": "dental_cleaning",
      "recommendation": "Professional dental cleaning recommended",
      "last_visit": "2025-03-21"
    }
  ]
}`
	}
] as const;

export const pythonSample = `import trellis

client = trellis.Client("tpk_live_...")

# Retrieve a linked pet's structured data
pet = client.pets.get("pet_a1b2c3")

print(pet.name)                  # "Naru"
print(pet.visits[0].diagnoses)   # structured diagnoses
print(pet.insurance_flags)       # pre-existing conditions`;

export const nodeSample = `import Trellis from '@trellis-pet/sdk';

const client = new Trellis('tpk_live_...');

// Retrieve a linked pet's structured data
const pet = await client.pets.get('pet_a1b2c3');

console.log(pet.name);                  // "Naru"
console.log(pet.visits[0].diagnoses);   // structured diagnoses
console.log(pet.insuranceFlags);        // pre-existing conditions`;
