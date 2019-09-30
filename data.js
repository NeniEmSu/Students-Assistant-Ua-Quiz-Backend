const correctAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const quizQuestions = [{
        type: 'text',
        number: 1,
        text: 'A child is 6 years old. Within one year of observation he had URI that lasted 8 days. Physical state is satisfactory. Specify hi health group:',
        possibilities: [{
                answer: 'I'
            },
            {
                answer: 'II'
            },
            {
                answer: 'III (a)'
            },
            {
                answer: 'III (b)'
            },
            {
                answer: 'III (c)'
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: 'text',
        number: 2,
        text: 'A sample of milk was taken for testing from a 5 ton milk batch. Lab analysis showed the following: fat content 2 %, specific density- 1,040 g/cm3, acidity 210T, reductase probe – weak positive. What way the product is to be used in? What would you advise?',
        possibilities: [{
                answer: 'Sell but inform customers about milk quality'
            },
            {
                answer: 'Write the product off for animal feeding'
            },
            {
                answer: 'Utilize technically'
            },
            {
                answer: 'Sell without limitations'
            },
            {
                answer: 'Annihilate the product'
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: 'text',
        number: 3,
        text: 'A 5 tons milk batch was sampled. The lab analysis revealed: fat content 2%, specific density - 1,04 g/cm3, acidity - 210Т, reductase probe - weak-positive. What way is the product to be used in? ',
        possibilities: [{
                answer: 'Sell but inform customers about milk quality'
            },
            {
                answer: 'Discard for animal feeding'
            },
            {
                answer: 'Technical utilization'
            },
            {
                answer: 'Sell without limitations'
            },
            {
                answer: 'Do the product away'
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: 'text',
        number: 4,
        text: 'The student has the following devices: Geiger counter, Ebert counter, Krotov\'s apparatus, Mischuk device, Ebert device. What device can he use to assess air germ pollution?',
        possibilities: [{
                answer: 'Krotov\'s apparatus'
            },
            {
                answer: 'Ebert\'s counter'
            },
            {
                answer: 'Geiger\'s counter'
            },
            {
                answer: 'Mischuk\'s device'
            },
            {
                answer: 'Ebert\'s device'
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: 'text',
        number: 5,
        text: 'Thyreotoxicosis patient is in the two-place hospital ward of therapeutic department. The area ofthe ward is 18 m2, height is 3 m, ventilation rate is 2,5/h. Air temperature is 200С, relative humidity is 45%, air movement velocity is 0,3 m/sec, light coefficient is 1/5, noise level constitutes 30 dB. Make a hygienic assessment of these conditions.',
        possibilities: [{
                answer: 'Discomfortable microclimate'
            },
            {
                answer: 'Non-effective ventilation'
            },
            {
                answer: 'Poor lighting'
            },
            {
                answer: 'High level of noise'
            },
            {
                answer: 'All conditions are OK'
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: 'text',
        number: 6,
        text: 'A 9 y.o. girl has an average height and harmonic growth development. She was ill with acute respiratory infection for five times. Define the group of her health. ',
        possibilities: [{
                answer: '2nd group'
            },
            {
                answer: '1st group'
            },
            {
                answer: '3rd group'
            },
            {
                answer: '4th group'
            },
            {
                answer: '5th group'
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: 'text',
        number: 7,
        text: 'A student lives in the modern house in the flat with a complete set of sanitary equipment (WC, bath, shower, local water heater). How much water consumption has he got?',
        possibilities: [{
                answer: '160-200 L/day'
            },
            {
                answer: '10-15 L/day'
            },
            {
                answer: '50-100 L/day'
            },
            {
                answer: '300-400 L/day'
            },
            {
                answer: '500-600 L/day'
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: 'text',
        number: 8,
        text: 'Clinic of a research institute for occupational diseases examined a worker who works at a concentration plant and diagnosed him with chronic dust bronchitis. The case is investigated by a commission including the representatives of: the plant, clinic, territorial SES, department of Social Insurance Fund, trade union. According to the "regulation on investigation of…", the commission should be headed by the representative of the following authority:',
        possibilities: [{
                answer: 'Territorial SES'
            },
            {
                answer: 'Plant'
            },
            {
                answer: 'Social Insurance Fund'
            },
            {
                answer: 'Trade union'
            },
            {
                answer: 'Clinic'
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: 'text',
        number: 9,
        text: 'Basing upon the data of laboratory assessment of sanitary state of soil in a certain territory, the soil was found to be low-contaminated according to the sanitary indicative value; contaminated according to the coli titer; low-contaminated according to the anaerobe titer. This is indicative of',
        possibilities: [{
                answer: 'Fresh fecal contamination'
            },
            {
                answer: 'Insufficient intensity of soil humification'
            },
            {
                answer: 'Old fecal contamination'
            },
            {
                answer: 'Constant entry of organic protein contaminations'
            },
            {
                answer: 'Insufficient insolation and aeration of soil'
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: 'text',
        number: 10,
        text: 'A patient complained about problems with pain and tactile sensitivity, pain in the nail bones at the end of the working day. He works at a plant with mechanical devices. What pathology can be suspected?',
        possibilities: [{
                answer: 'Vibration disease'
            },
            {
                answer: 'Caisson disease'
            },
            {
                answer: 'Noise disease'
            },
            {
                answer: 'Overwork symptoms'
            },
            {
                answer: 'Hypovitaminosis of B1'
            }
        ],
        selected: null,
        correct: null
    }
];

module.exports = {
    correctAnswers,
    quizQuestions,
};