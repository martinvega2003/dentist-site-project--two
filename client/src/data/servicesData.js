import imgOne from "../images/service-card-img-one.avif"
import imgTwo from "../images/service-card-img-two.avif"
import imgThree from "../images/service-card-img-three.avif"
import femaleDentist from "../images/female-dentist.jpg"
import maleDentist from "../images/male-dentist.jpg"
import femaleDentistTwo from "../images/female-dentist-2.jpg"
import maleDentistTwo from "../images/male-dentist-2.jpg"
import femaleDentistThree from "../images/female-dentist-3.jpg"
import maleDentistThree from "../images/male-dentist-3.jpg"

export const servicesData = [
  {
    category: "General Dentistry",
    description: "Comprehensive care services to maintain your dental health.",
    image: imgOne,
    heading: "C omprehensive Care for Your Oral Health",
    subheading: "Providing preventive and restorative dental treatments to keep your smile healthy and strong.",
    path: "general/services",
    doctors: [
      {
        fullName: "Dr. Richard Lee",
        experience: "15 years",
        description: "Dr. Lee has extensive experience in preventive dentistry and oral examinations.",
        image: maleDentist
      },
      {
        fullName: "Dr. Jane Smith",
        experience: "8 years",
        description: "Dr. Smith has a focus on restorative dentistry and has completed numerous successful fillings treatments.",
        image: femaleDentist
      },
    ],
    services: [
      {
        name: "Teeth Cleaning",
        description: "Teeth cleaning is a preventive dental procedure aimed at removing plaque, tartar, and stains from the teeth, enhancing oral hygiene. It includes professional scaling and polishing to prevent cavities, gum disease, and bad breath. This process, typically performed by a dental hygienist, also helps in maintaining overall health by reducing risks associated with poor oral hygiene, such as heart disease and diabetes. Regular cleanings, recommended every six months, ensure bright, healthy smiles and long-term dental well-being.",
        faqs: [
          { question: "How often should I get my teeth cleaned?", answer: "It is recommended to get your teeth cleaned every 6 months." },
          { question: "Is teeth cleaning painful?", answer: "Most people experience minimal discomfort during the procedure." },
          { question: "What is the cost of teeth cleaning?", answer: "The cost varies, but it typically ranges from $75 to $200." },
          { question: "Can teeth cleaning help with bad breath?", answer: "Yes, it can remove plaque and bacteria, improving breath." },
          { question: "Are there any risks involved?", answer: "Teeth cleaning is a safe procedure when performed by a professional." }
        ],
      },
      {
        name: "Fillings",
        description: "Dental fillings are used to restore teeth damaged by cavities or minor fractures, improving both function and appearance. The process involves removing decayed material and filling the cavity with materials such as composite resin, amalgam, or porcelain. Fillings help prevent further decay, protect tooth structure, and restore chewing efficiency. Modern techniques ensure durability and a natural look. Routine check-ups and fillings, when needed, are essential for maintaining a healthy, pain-free smile and avoiding more extensive dental procedures in the future.",
        faqs: [
          { question: "What are dental fillings?", answer: "Fillings are used to restore teeth affected by cavities." },
          { question: "How long do dental fillings last?", answer: "Fillings typically last between 5 to 10 years." },
          { question: "Are fillings painful?", answer: "The process is generally painless with the use of local anesthesia." },
          { question: "What types of fillings are available?", answer: "Options include silver amalgam, composite, and porcelain fillings." },
          { question: "Will a filling prevent further cavities?", answer: "Fillings restore the tooth, but maintaining oral hygiene is essential to prevent further cavities." }
        ],
      },
      {
        name: "Oral Exams",
        description: "Oral exams are comprehensive evaluations of your dental and overall oral health conducted by a dentist. These exams involve checking for cavities, gum disease, oral cancer, and other potential issues. X-rays may be taken to assess the health of underlying structures, such as roots and bone. Regular oral exams, ideally once a year, are vital for early detection and prevention of dental problems, ensuring personalized treatment plans for optimal oral hygiene and long-term health. They provide a foundation for a confident, radiant smile.",
        faqs: [
          { question: "How often should I have an oral exam?", answer: "It is recommended to have an oral exam once a year." },
          { question: "What is checked during an oral exam?", answer: "The dentist checks for cavities, gum disease, and other oral health issues." },
          { question: "Are oral exams covered by insurance?", answer: "Most dental insurance plans cover regular oral exams." },
          { question: "Can oral exams detect early signs of oral cancer?", answer: "Yes, oral exams can help detect early signs of oral cancer." },
          { question: "What happens if I have issues found in my oral exam?", answer: "Your dentist will discuss treatment options based on the findings." }
        ],
      }
    ]
  },
  {
    category: "Cosmetic Dentistry",
    description: "Enhance your smile with professional whitening, veneers, and more.",
    image: imgTwo,
    heading: "E nhancing Your Smile with Confidence",
    subheading: "Offering advanced cosmetic treatments to help you achieve the smile you've always dreamed of.",
    path: "cosmetic/services",
    doctors: [
      {
        fullName: "Dr. Michael Black",
        experience: "20 years",
        description: "Dr. Black is an expert in cosmetic procedures like veneers, having performed hundreds of smile transformations.",
        image: maleDentistTwo
      },
      {
        fullName: "Dr. Anna Green",
        experience: "12 years",
        description: "Dr. Green specializes in cosmetic dentistry and has performed numerous teeth whitening procedures.",
        image: femaleDentistTwo
      },
    ],
    services: [
      {
        name: "Teeth Whitening",
        description: "Teeth whitening is a cosmetic dental procedure designed to lighten discoloration and remove stains, restoring the natural brightness of your teeth. Professional whitening treatments use safe, high-grade bleaching agents for quick and effective results. The process enhances your smile, boosts self-confidence, and helps combat discoloration caused by aging, coffee, tea, or tobacco. Whether done in-office for immediate results or at home with customized trays, teeth whitening is a popular, minimally invasive way to achieve a more radiant appearance.",
        faqs: [
          { question: "How long does teeth whitening last?", answer: "Teeth whitening can last up to 6 months with proper care." },
          { question: "Is teeth whitening safe?", answer: "Yes, professional whitening is safe when done under a dentist's supervision." },
          { question: "Does teeth whitening work on all stains?", answer: "It works best on yellow or brown stains, but may not be effective on gray stains." },
          { question: "Can I whiten my teeth at home?", answer: "Home whitening kits are available, but professional treatment provides better results." },
          { question: "Are there any side effects?", answer: "Some people may experience sensitivity after treatment, but it usually subsides quickly." }
        ],
      },
      {
        name: "Veneers",
        description: "Veneers are thin, custom-made shells applied to the front surfaces of teeth to improve appearance and function. Made from porcelain or resin composite, veneers correct imperfections like discoloration, chips, gaps, or misalignment, creating a natural, flawless look. This minimally invasive cosmetic treatment involves shaping the tooth surface and bonding the veneer securely in place. Veneers offer long-lasting results, durability, and a solution tailored to individual needs, making them a popular choice for transforming and enhancing smiles.",
        faqs: [
          { question: "What are veneers?", answer: "Veneers are thin shells of porcelain or composite material placed over your teeth to improve appearance." },
          { question: "How long do veneers last?", answer: "Veneers can last 10 to 15 years with proper care." },
          { question: "Are veneers reversible?", answer: "No, the process involves removing a small amount of enamel." },
          { question: "Do veneers look natural?", answer: "Yes, they are custom-made to match your natural teeth and provide a realistic look." },
          { question: "Are veneers covered by insurance?", answer: "Veneers are often considered cosmetic and may not be covered by insurance." }
        ],
      },
      {
        name: "Bonding",
        description: "Dental bonding is a quick and cost-effective procedure to repair chipped, cracked, or decayed teeth, as well as to enhance cosmetic appearance. Using a tooth-colored resin, the dentist sculpts and hardens the material to seamlessly blend with the natural teeth. Bonding is versatile, addressing gaps, discoloration, and minor imperfections while preserving most of the tooth structure. It is a pain-free, non-invasive solution ideal for improving aesthetics and functionality, providing an instant confidence boost with minimal downtime.",
        faqs: [
          { question: "What is dental bonding?", answer: "Dental bonding is a procedure where tooth-colored resin is applied to repair or improve the appearance of teeth." },
          { question: "How long does bonding last?", answer: "Bonding typically lasts between 3 to 10 years." },
          { question: "Is dental bonding painful?", answer: "The procedure is generally painless and does not require anesthesia." },
          { question: "Can bonding fix chipped teeth?", answer: "Yes, bonding can restore the shape of chipped or cracked teeth." },
          { question: "How do I care for bonded teeth?", answer: "Avoid biting hard objects and maintain regular dental hygiene to ensure the longevity of the bonding." }
        ],
      }
    ]
  },
  {
    category: "Orthodontics",
    description: "S traighten your teeth and improve jaw alignment with advanced solutions.",
    image: imgThree,
    heading: "S traighten Your Smile with Expert Orthodontic Care",
    subheading: "Advanced orthodontic solutions tailored to align your teeth and enhance your oral health.",
    path: "orthodontics/services",
    doctors: [
      {
        fullName: "Dr. Sarah Green",
        experience: "8 years",
        description: "Dr. Green has extensive experience with clear aligner treatments and provides personalized care.",
        image: femaleDentistThree
      },
      {
        fullName: "Dr. Michael Clear",
        experience: "10 years",
        description: "Dr. Clear is an orthodontist who focuses on maintaining results with retainers.",
        image: maleDentistThree
      },
    ],
    services: [
      {
        name: "Braces",
        description: "Braces are orthodontic devices used to correct misaligned teeth, bite irregularities, and jaw positioning. By applying consistent, gentle pressure, braces gradually shift teeth into proper alignment over time. Available in various types, including traditional metal, ceramic, or lingual options, they are customized to suit individual needs. Braces not only improve the aesthetic appearance of your smile but also enhance oral health by making it easier to clean teeth, reducing the risk of cavities and gum disease.",
        faqs: [
          { question: "How long do I need to wear braces?", answer: "Braces are typically worn for 18 to 24 months, depending on the severity of the alignment issues." },
          { question: "Are braces painful?", answer: "There may be mild discomfort after adjustments, but it is temporary." },
          { question: "How often do I need to visit the orthodontist with braces?", answer: "You should visit the orthodontist every 4 to 6 weeks for adjustments." },
          { question: "Can braces fix overbite?", answer: "Yes, braces are effective in correcting overbites and other alignment issues." },
          { question: "Can I eat normally with braces?", answer: "You can eat most foods, but you should avoid sticky or hard foods that could damage the braces." }
        ],
      },
      {
        name: "Clear Aligners",
        description: "Clear aligners are a discreet and removable orthodontic solution for straightening teeth. Made from transparent, medical-grade plastic, they are custom-fitted to guide teeth into alignment gradually. Ideal for mild to moderate orthodontic issues, clear aligners are nearly invisible, allowing wearers to maintain confidence in their appearance throughout treatment. With no dietary restrictions and easy cleaning, aligners offer a convenient alternative to traditional braces, delivering effective results without compromising comfort or daily routines.",
        faqs: [
          { question: "What are clear aligners?", answer: "Clear aligners are transparent trays used to straighten teeth discreetly." },
          { question: "Are clear aligners effective?", answer: "Yes, they are effective in treating mild to moderate alignment issues." },
          { question: "How long do I need to wear clear aligners?", answer: "Clear aligners are typically worn for 12 to 18 months, depending on the treatment plan." },
          { question: "Are clear aligners more comfortable than braces?", answer: "Yes, clear aligners are more comfortable and less noticeable than traditional braces." },
          { question: "Can I remove clear aligners?", answer: "Yes, you can remove them when eating or brushing your teeth." }
        ],
      },
      {
        name: "Retainers",
        description: "Retainers are custom-made dental devices used to maintain the position of teeth after orthodontic treatment. They ensure that the teeth remain in their new alignment, preventing them from shifting back. Retainers can be fixed or removable, depending on individual needs. Made from durable materials, such as metal wires or clear plastic, they are designed for comfort and effectiveness. Regular use of retainers is crucial for preserving the results of braces or aligners, helping you maintain a straight and healthy smile for life.",
        faqs: [
          { question: "What are retainers?", answer: "Retainers are devices worn after orthodontic treatment to maintain the alignment of your teeth." },
          { question: "How long should I wear retainers?", answer: "You should wear retainers as prescribed, typically for at least 6 months after treatment." },
        ],
      }
    ]
  }
];