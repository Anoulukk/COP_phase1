import axios from "axios";

export let provinceOptions:any = []
export let districtOptions:any = []
export let villageOptions:any = []

    try {
      const response = await axios.get("http://localhost:5173/laosAPI.json");
      const laosData = response.data;

      provinceOptions =
        laosData.provinces.map((province: any) => ({
          value: province.pid,
          label: province.pn,
        })
      );

      districtOptions =
        laosData.district.map((district: any) => ({
          value: district.did,
          label: district.dn,
          provinceId: district.pid,
        })
      );

      villageOptions =
        laosData.village.map((village: any) => ({
          value: village.vid,
          label: village.vn,
          districtId: village.did,
        })
      );

    } catch (error) {
      console.error("Error fetching Laos data:", error);
    }
    const processOptions = [
      { value: "Continue", label: "ຕໍ່ເນື່ອງ (Continue)" },
      { value: "Batch", label: "ບໍ່ຕໍ່ເນືື່ອງ (Batch)" },
    ];

  const businessSectorOptions = [
    { value: "A", label: "ກະສິກຳ, ປ່າໄມ້ ແລະ ການປະມົງ" },
    { value: "B", label: "ອຸດສາຫະກຳບໍ່ແຮ່ ແລະ ການຂຸດຄົ້ນ" },
    { value: "C", label: "ອຸດສາຫະກຳປຸງແຕ່ງ" },
    { value: "D", label: "ການສະໜອງ ໄຟຟ້າ, ອາຍແກັສ, ອາຍຮ້ອນ, ແລະ ອາກາດປັບແຕ່ງ" },
    { value: "E", label: "ການສະໜອງນ້ຳ, ລະບາຍນ້ຳເສຍ, ການບໍລິຫານຈັດການ ແລະ ເຄື່ອນໄຫວ ບຳບັດ ສິ່ງເສດເຫຼືອ" },
    { value: "F", label: "ການກໍ່ສ້າງ" },
    { value: "G", label: "ການຄ້າ ຂາຍຍົກ ແລະ ຂາຍຍ່ອຍ; ສ້ອມແປງລົດຍົນ ແລະ ລົດຈັກ" },
    { value: "H", label: "ການຂົນສົ່ງ ແລະ ສາງສິນຄ້າ" },
    { value: "I", label: "ການເຄື່ອນໄຫວໃຫ້ທີ່ພັກເຊົາ ແລະ ບໍລິການ ອາຫານ" },
    { value: "J", label: "ຂໍ້ມູນຂ່າວສານ ແລະ ການຕິດຕໍ່ສື່ສານ" },
    { value: "K", label: "ການເຄື່ອນໄຫວ ດ້ານການເງິນ ແລະ ການປະກັນໄພ" },
    { value: "L", label: "ການເຄື່ອນໄຫວ ດ້ານ ອະສັງຫາລິມະຊັບ" },
    { value: "M", label: "ການເຄື່ອນໄຫວດ້ານ ສາຍວິຊາຊີບ, ວິທະຍາສາດ ແລະ ເຕັກນິກ" },
    { value: "N", label: "ການເຄື່ອນໄຫວ ບໍລິການ ສະໜັບສະໜູນ ແລະ ຄຸ້ມຄອງບໍລິຫານ" },
    { value: "O", label: "ການບໍລິຫານມວນຊົນ ແລະ ການປ້ອງກັນຊາດ, ການປົກປ້ອງສັງຄົມ ແບບບັງຄັບ" },
    { value: "P", label: "ການສຶກສາ" },
    { value: "Q", label: "ການເຄື່ອນໄຫວກ່ຽວກັບສຸຂະພາບມະນຸດ ແລະ ວຽກງານທາງສັງຄົມ" },
    { value: "R", label: "ສິລະປະ, ການບັນເທີງ ແລະ ພັກຜ່ອນ" },
    { value: "S", label: "ການເຄື່ອນໄຫວບໍລິການອື່ນໆ" },
    { value: "T", label: "ການເຄື່ອໄຫວ ຂອງບັນດາຄົວເຮືອນ ທີ່ເປັນນາຍຈ້າງ, ການເຄື່ອນໄຫວ ຜະລິດສິນຄ້າ ແລະ ບໍລິການ ທີ່ບໍ່ສາມາດແຍກໄດ້ ຂອງບັນດາຄົວເຮືອນ ສຳລັບຊົມໃຊ້ເອງ" },
    { value: "U", label: "ການເຄື່ອນໄຫວ ຂອງບັນດາອົງການຈັດຕັ້ງສາກົນ ແລະ ສະຖານທູດ" },
  ];
  const specialAreaOptions = [
    { value: "A", label: "ເຂດອຸດສາຫະກຳ​ ແລະ​ການຄ້າວຽງຈັນ" },
    { value: "B", label: "ເຂດເສດຖະກິດ ບຶງທາດຫຼວງ" },
    { value: "C", label: "ເຂດພັດທະນາ ກວມລວມໄຊເຊດຖາ" },
    { value: "D", label: "ເຂດເສດຖະກິດສະເພາະ ລອງແທ່ງ -​ວຽງຈັນ" },
    { value: "E", label: "ເຂດເສດຖະກິດສະເພາະດົງໂພສີ" },
    { value: "F", label: "ເຂດເສດຖະກິດສະເພາະ ທ່າ​ແຂກ​" },
    { value: "G", label: "ເຂດເສດຖະກິດພິເສດ ແຂວງ​ ສະຫວັນນະເຂດ (ຈຸດ A)​" },
    { value: "H", label: "ເຂດເສດຖະກິດພິເສດ ແຂວງ​ ສະຫວັນນະເຂດ (ຈຸດ B)​" },
    { value: "H", label: "ເຂດເສດຖະກິດພິເສດ ແຂວງ​ ສະຫວັນນະເຂດ (ຈຸດ B1)​" },
    { value: "I", label: "ເຂດເສດຖະກິດພິເສດ ແຂວງ​ ສະຫວັນນະເຂດ (ຈຸດ C)​" },
    { value: "J", label: "ເຂດເສດຖະກິດພິເສດ ແຂວງ​ ສະຫວັນນະເຂດ (ຈຸດ D)​" },
    { value: "K", label: "ເຂດເສດຖະກິດພິເສດ ແຂວງ​ ສະຫວັນນະເຂດ (ຈຸດ E)​" },
    { value: "L", label: "ເຂດເສດຖະກິດສະເພາະ ບໍ່ເຕັນແດນງາມ" },
    { value: "M", label: "ເຂດເສດຖະກິດພິເສດສາມຫຼ່ຽມທອງຄຳ" },
    { value: "N", label: "ເຂດເສດຖະກິດພິເສດຫຼວງພະບາງ" },
    { value: "O", label: "ເຂດເສດຖະກິດສະເພາະ ພູຂຽວ" },
    { value: "P", label: "ເຂດເສດຖະກິດພິເສດ ແລະ​ສະເພາະຈຳປາສັກ" },
    { value: "Q", label: "ເຂດເສດຖະກິດພິເສດມະຫານະທີສີພັນດອນ" },
  ];
  const sizeOptions = [
    { value: "large", label: "ໃຫຍ່" },
    { value: "Medium", label: "ກາງ" },
    { value: "small", label: "ນ້ອຍ" },
  ];

  const riskOptions = [
    { value: "high", label: "ສູງ" },
    { value: "Medium", label: "ກາງ" },
    { value: "low", label: "ຕ່ຳ" },
  ];
  const haveOrNoOptions = [
    { value: "have", label: "ມີ" },
    { value: "do_not_have", label: "ບໍ່ມີ" },
  ];
  const areaOptions = [
    { value: "a", label: "1. ≥ 55,000 m2" },
    { value: "b", label: "2. 10,000-55,000 m2" },
    { value: "c", label: "3. 5,000 -10,00 m2" },
    { value: "d", label: "4. < 5,000 m2" },
  ];
  const coverStandardOptions = [
    { value: "a", label: "1. ໃຊ້ວິດຊຶມແບບປະຖົມປະຖານ" },
    { value: "b", label: "2. ໃຊ້ຖັງບຳບັດສຳເລັດຮູບ (Septic tank)" },
    { value: "c", label: "3. ບຳບັດເບື້ອງຕົ້ນແລ້ວນຳເຂົ້າລະບົບບຳບັດນ້ຳເປື້ອນລວມຂອງໂຮງງານ" },
    { value: "d", label: "4. ອື່ນໆ" },
  ];

const subject_category = [
    { value: "environment", label: "ວິຊາການຄຸ້ມຄອງສິ່ງແວດລ້ອມທົ່ວໄປ" },
    { value: "air_pollution", label: "ວິຊາການຄວບຄຸມມົນລະພິດທາງນ້ຳ" },
    { value: "water_pollution", label: "ວິຊາການຄວບຄຸມມົນລະພິດທາງອາກາດ" },
    { value: "chemical", label: "ວິຊາການຄວບຄຸມທາດເຄມີ" },
    { value: "Hard_type_and_others", label: "ວິຊາການຄວບຄຸມສິ່ງເສດເຫຼືອປະເພດແຂງ ແລະ ອື່ນໆ" }
  ];
const firstStepTreatment = [
    { value: "Equalization", label: "1. ການປັບສົມດຸນ (Equalization)" },
    { value: "Screening", label: "2. ການດັກດ້ວຍຕະແກງ (Screening)" },
    { value: "Grease&Oil_Removal", label: "3. ການແຍກນ້ຳມັນ ແລະ ໄຂມັນ (Grease&Oil Removal)" },
    { value: "Sedimentation", label: "4. ການຕົກຕະກອນ (Sedimentation)" },
    { value: "Dissoved_Air_Flotation", label: "5. ການລອຍຕະກອນ (Dissoved Air Flotation)" },
    { value: "pH_Adjustment", label: "6. ການປັບ pH (pH Adjustment)" },
    { value: "Chemical_Coagulation", label: "7. ການລວມຕະກອນ (Chemical Coagulation)" }
  ];
const secondStepTreatment = [
    { value: "Activated_Sludge", label: "1. ຂະບວນການ AS (Activated Sludge)" },
    { value: "Aerated_Lagoon", label: "2. ອ່າງຕື່ມອາກາດ (Aerated Lagoon)" },
    { value: "Trickling_Filter", label: "3. ຖັງໂປຍກອງ (Trickling Filter)" },
    { value: "Anaerobic_Pond", label: "4. ອ່າງແອນແອໂຮບິກ (Anaerobic Pond)" },
    { value: "Stabilization_Pond", label: "5. ອ່າງປັບສະຖຽນ (Stabilization Pond)" },
    { value: "Biological_Contactors", label: "6. ແຜ່ນໝຸນຊີວະພາບ (Rotating Biological Contactors)" },
    { value: "Chemical_precipitation", label: "7. ການຕົກຜະລຶກ (Chemical precipitation)" }
  ];
const thirdStepTreatment = [
    { value: "Ultralitration", label: "1. Ultralitration" },
    { value: "Reverse_Osmosis", label: "2. Reverse Osmosis" },
    { value: "Carbon_Adsorption", label: "3. Carbon Adsorption" },
    { value: "Ion_Exchange", label: "4. Ion Exchange" },
    { value: "Denitrification", label: "5. Denitrification" },
  ];
const lastStepTreatment = [
    { value: "Aerobic_Pond", label: "1. ອ່າງແອໂຮບິກ (Aerobic Pond)" },
    { value: "Ozonation", label: "2. ການຕື່ມໂອໂຊນ (Ozonation)" },
    { value: "Chlorination", label: "3. ການຕື່ມຄໍລີນ (Chlorination)" },
    { value: "Constructed_Wetland", label: "4. ບຶງປະດິດ (Constructed Wetland)" },
  ];
  const groupedOptions = [
    {
      label: "ວິທີບຳບັດ (R1-R13)",
      url: "https://emac.la/2024/01/20/%e0%ba%a5%e0%ba%b0%e0%ba%ab%e0%ba%b1%e0%ba%94%e0%ba%a7%e0%ba%b4%e0%ba%97%e0%ba%b5%e0%ba%9a%e0%ba%b3%e0%ba%9a%e0%ba%b1%e0%ba%94-%e0%bb%81%e0%ba%a5%e0%ba%b0-%e0%ba%81%e0%ba%b3%e0%ba%88%e0%ba%b1%e0%ba%94/",
      options: [
        { value: "R1", label: "R1" },
        { value: "R2", label: "R2" },
        { value: "R3", label: "R3" },
        { value: "R4", label: "R4" },
        { value: "R5", label: "R5" },
        { value: "R6", label: "R6" },
        { value: "R7", label: "R7" },
        { value: "R8", label: "R8" },
        { value: "R9", label: "R9" },
        { value: "R10", label: "R10" },
        { value: "R11", label: "R211" },
        { value: "R12", label: "R12" },
        { value: "R13", label: "R13" },
      ],
    },
    {
      label: "ວິທີກຳຈັດ (D1-D15)",
      url: "https://emac.la/2024/03/12/%e0%ba%81%e0%ba%b2%e0%ba%99%e0%ba%81%e0%ba%b3%e0%ba%88%e0%ba%b1%e0%ba%94%e0%ba%aa%e0%ba%b4%e0%bb%88%e0%ba%87%e0%bb%80%e0%ba%aa%e0%ba%94%e0%bb%80%e0%ba%ab%e0%ba%bc%e0%ba%b7%e0%ba%ad%e0%bb%80%e0%ba%9b/",
      options: [
        { value: "D1", label: "D1" },
        { value: "D2", label: "D2" },
        { value: "D3", label: "D3" },
        { value: "D4", label: "D4" },
        { value: "D5", label: "D5" },
        { value: "D6", label: "D6" },
        { value: "D7", label: "D7" },
        { value: "D8", label: "D8" },
        { value: "D9", label: "D9" },
        { value: "D10", label: "D10" },
        { value: "D11", label: "D211" },
        { value: "D12", label: "D12" },
        { value: "D13", label: "D13" },
        { value: "D14", label: "D14" },
        { value: "D15", label: "D15" },
      ],
    },
  ];
    const referentOptions = [
      { value: "building", label: "1. ອາຄານສຳນັກງານ" },
      { value: "food_court", label: "2. ໂຮງອາຫານ" },
      { value: "other_stay", label: "3. ທີ່ພັກອື່ນໆ " },
      { value: "other", label: "4. ອື່ນໆ (ສາມາດກອກໄດ້)" },
    ];
  
    const removalOptions = [
      { value: "buried_inside_the_factory", label: "1. ຝັງພາຍໃນໂຮງງານ" },
      { value: "incinerate_within_the_factory", label: "2. ເຜົາກຳຈັດພາຍໃນໂຮງງານ" },
      { value: "send_to_disposal_company", label: "3. ສົ່ງບໍລິສັດຮັບກຳຈັດ" },                                                                                
      { value: "other", label: "4. ອື່ນໆ (ສາມາດກອກໄດ້)" },
    ];
    const removalT4_2Options = [
      { value: "send_to_disposal_company", label: "1. ສົ່ງບໍລິສັດຮັບກຳຈັດ" },                                                                                
      { value: "other", label: "2. ອື່ນໆ (ສາມາດກອກໄດ້)" },
    ];
  
    const typesOfStoredWasteOptions = [
      { value: "general_waste", label: "1. ສິ່ງເສດເຫຼືອທົ່ວໄປ" },                                                                                
      { value: "hazardous_waste", label: "2. ສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ" },
      { value: "non_hazardous_waste", label: "3. ສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ" },
      { value: "recycle_waste", label: "4. ສິ່ງເສດເຫຼືອຮີໄຊເຄີ້ນ" },
    ];
  
    const typesOfWarehouseOptions = [
      { value: "in_the_building", label: "1. ໃນອາຄານ" },                                                                                
      { value: "In_a_separate_building_for_waste_only", label: "2. ໃນອາຄານແຍກສະເພາະສິ່ງເສດເຫຼືອ" },
      { value: "outside_the_building", label: "3. ນອກອາຄານ" },
    ];
    
    const treatmentAndEliminationCodeOptions = [
      { value: "treatment", label: "ວິທີບຳບັດ (R1-R13)" },                                                                                
      { value: "elimination", label: "ວິທີກຳຈັດ (R1-R15)" },
    ];
  
    const fuelUsedOptions = [
      { value: "a", label: "ບໍ່ໄດ້ນຳໃຊ້ເຊື້ອໄຟ" },
      { value: "b", label: "ນ້ຳມັນເຕົາ" },
      { value: "c", label: "ຖ່ານຫີນ" },
      { value: "d", label: "ຊີວະມວນ" },
      { value: "e", label: "ໄຟຟ້າ" },
    ];
    const ventilationPatternOptions = [
      { value: "a", label: "ປ່ອງລະບາຍອາກາດທົ່ວໄປ" },
      { value: "b", label: "ປ່ອງລະບາຍອາກາດແບບສະອາດ (Clean room)" },
      { value: "c", label: "ປ່ອງລະບາຍອາກາດຈາກການເຜົາໄໝ້" },
      { value: "d", label: "ປ່ອງໝໍ້ອາຍນ້ຳ (Boiler)" },
      { value: "e", label: "ປ່ອງໝໍ້ຕົ້ມ" },
      { value: "f", label: "ປ່ອງລະບາຍອາກາດສະເພາະຈຸດ (Exhaust)" },
      { value: "g", label: "ປ່ອງລະບາຍອາກາດຈາກການນຳໃຊ້ສານເຄມີ" },
    ];
    const protectionStandardsOptions = [
      { value: "a", label: "ຖັງດັກຝຸ່ນ (Gravity settler)" },
      { value: "b", label: "ໄຊໂຄນດັກຝຸ່ນ (Cyclones)" },
      { value: "c", label: "ເຄື່ອງດັກຈັບຝຸ່ນດ້ວຍນ້ຳ (Wet collectors or scrubbers)" },
      { value: "d", label: "ຖົງກອງ (Fabric filter)" },
      { value: "e", label: "ລະບົບດູດຊັບ ຫຼື ດູດຊືມທາດອາຍ (Adsorption & Absorption)" },
      { value: "f", label: "ອື່ນໆ" },
    ];
export const form100:any = {
    form110: [
      { classified: "heading", code: "110", description: "ຂໍ້ມູນວິສາຫະກິດ", input_type: null },
      { classified: "title", code: "110A", description: "ຊື່ບໍລິສັດ", input_type: null },
      { classified: "sub_head", code: "110A1", description: "ຊື່ລາວ", input_type: "text", main_key : "110A" },
      { classified: "sub_head", code: "110A2", description: "ຊື່ອັງກິດ", input_type: "text", main_key : "110A" },
      { classified: "title", code: "110B", description: "ຜູ້ອຳນວຍການ", input_type: "text" },
      { classified: "title", code: "110C", description: "ປະກອບກິດຈະການ", input_type: "text" },
      { classified: "title", code: "110D", description: "ທຶນຈົດທະບຽນ", input_type: null },
      { classified: "sub_head", code: "110D1", description: "ກີບ", input_type: "number", main_key : "110D" },
      { classified: "sub_head", code: "110D2", description: "ໂດລາ", input_type: "number", main_key : "110D" },
      { classified: "title", code: "110E", description: "ກຳນົດອາຍຸການລົງທຶນ (ປີ)", input_type: "number" },
      { classified: "title", code: "110F", description: "ທີ່ຕັ້ງສຳນັກງານ", input_type: null },
      { classified: "sub_head", code: "110F1", description: "ບ້ານ", input_type: "choice", options: villageOptions, main_key : "110F" },
      { classified: "sub_head", code: "110F2", description: "ເມືອງ", input_type: "choice", options: districtOptions, main_key : "110F" },
      { classified: "sub_head", code: "110F3", description: "ແຂວງ", input_type: "choice", options: provinceOptions, main_key : "110F" },
      { classified: "sub_head", code: "110F4", description: "ເຂດເສດຖະກິດພິເສດ", input_type: "choice", options: specialAreaOptions, main_key : "110F" },
      { classified: "title", code: "110G", description: "ໂຄງຮ່າງການຈັດຕັ້ງ", input_type: "file-P" },
      { classified: "title", code: "110H", description: "ເລກປະຈຳຕົວວິສາຫະກິດ", input_type: "number" },
      { classified: "title", code: "110I", description: "ເລກປະຈຳຕົວຜູ້ຄອບຄອງສິ່ງເສດເຫຼືອ ແລະ ສ້າງມົນລະພິດ (EMC ID)", input_type: "text" },
      { classified: "title", code: "110J", description: "ຂະແໜງທຸລະກິດ (LSIC)", input_type: "multi-choice", options: businessSectorOptions},
      { classified: "title", code: "110K", description: "ຂະໜາດໂຮງງານ", input_type: "choice", options: sizeOptions },
      { classified: "title", code: "110L", description: "ລະດັບຄວາມສ່ຽງຜົນກະທົບດ້ານສິ່ງແວດລ້ອມຂອງໂຮງງານ", input_type: "choice", options: riskOptions  },
    ],
    form120: [
      { classified: "heading", code: "120", description: "ຫົວໜ່ວຍຄຸ້ມຄອງສິ່ງແວດລ້ອມ", input_type: null },
      { classified: "title", code: "121", description: "ບໍລິສັດທີ່ປຶກສາສິ່ງແວດລ້ອມ", input_type: "multi-text", 
        column: {
          columnHead: [
            { id:1, title:"121A ຊື່", inputType:"text-area" },
            { id:2, title:"121B ເລກທີໃບອະນຸຍາດໃຫ້ບໍລິການວິຊາການດ້ານສິ່ງແວດລ້ອມ", inputType:"text-area" }
          ]
        }
      },
      { classified: "title", code: "122", description: "ຜູ້ຈັດການດ້ານສິ່ງແວດລ້ອມ", input_type: "multi-text", 
        column:{
          columnHead:[
            { id:1, title:"122A ຊື່", inputType:"text-area" }
          ] 
        } 
      },
      { classified: "title", code: "123", description: "ວິຊາການຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ເຄມີປະຈຳໂຮງງານ", input_type: "multi-text",
         column:{
          columnHead:[
            {id:1, title:"ຊື່", inputType:"text-area"},
            {id:2, title:"ປະເພດວິຊາການ", inputType:"choice" }
          ], 
          options:[
            { forID:2, options: subject_category}
          ]
        }
      },
    ],
    form130: [
      { classified: "heading", code: "130", description: "ຫົວໜ່ວຍຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ ", input_type: null },
      { classified: "title", code: "131", description: "ພະນັກງານຮັບຜິດຊອບດ້ານຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: null },
      { classified: "sub_head", code: "131A", description: "ຊື່ ພະນັກງານຮັບຜິດຊອບດ້ານຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: "multi-text", 
        column:{
          columnHead:[
            {id:1, title:"ຊື່", inputType:"text-area"}
          ]
        }, 
        main_key : "131" 
      },
      { classified: "title", code: "132", description: "ໜ່ວຍງານຮັບຜິດຊອບ ຫຼື ຄະນະກຳມະການດ້ານຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: null },
      { classified: "sub_head", code: "132A", description: "ລາຍຊື່ພາຍໃນຫົວໜ່ວຍຄວາມປອດໄພ", input_type: "T1-1", 
        column:{
          columnHead:[
            {id:1, title:"ຊື່ ແລະ ນາມສະກຸນ", inputType:"text-area"},
            {id:2, title:"ພາກສ່ວນ", inputType:"text-area" }
          ]
        },
        main_key : "132" 
      },
      { classified: "sub_head", code: "132B", description: "ໂຄງຮ່າງການຈັດຕັ້ງໜ່ວຍງານຮັບຜິດຊອບຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: "file-P", main_key : "132" },
    ],
    form140: [
      { classified: "heading", code: "140", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
      { classified: "sub_head", code: "140A", description: "ໃບທະບຽນວິສາຫະກິດ (D1-1)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140B", description: "ໃບອະນຸຍາດລົງທຶນ (D1-2)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140C", description: "ໃບຢັ້ງຢືນ ເລກປະຈຳຕົວວິສາຫະກິດ (D1-3)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140D", description: "ໃບຢັ້ງຢືນການມອບເລກປະຈຳຕົວຜູ້ເສຍອາກອນ (D1-4)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140E", description: "ໃບຢັ້ງຢືນເລກປະຈຳຕົວຜູ້ຄອບຄອງສິ່ງເສດເຫຼືອ ແລະ ສ້າງມົນລະພິດ (D1-5)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140F", description: "ໃບອະນຸຍາດດຳເນີນທຸລະກິດກ່ຽວກັບເຄມີ (D1-6)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140G", description: "ໃບອະນຸຍາດໃຫ້ບໍລິການວິຊາການກ່ຽວກັບສິ່ງແວດລ້ອມ (D1-7)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140H", description: "ຊຸດເອກະສານປະຈຳຕົວຜູ້ຈັດການດ້ານສິ່ງແວດລ້ອມ (D1-8)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140I", description: "ຊຸດເອກະສານປະຈຳຕົວວິຊາການຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ເຄມີປະຈຳໂຮງງານ (D1-9)", input_type: "file-D-multi", main_key : "140" },
      { classified: "sub_head", code: "140J", description: "ຊຸດເອກະສານປະຈຳຕົວພະນັກງານຮັບຜິດຊອບດ້ານຄວາມປອດໄພ (D1-10)", input_type: "file-D", main_key : "140" },
    ],
  };

export const form200:any = {
    form210: [
        { classified: "heading", code: "200", description: "ທີ່ຕັ້ງຂອງໂຮງງານ", input_type: null },
        { classified: "title", code: "210A", description: "ທີ່ຕັ້ງໂຮງງານ", input_type: null },
        { classified: "sub_head", code: "210A1", description: "ຖະໜົນ", input_type: "text", main_key : "210A" },
        { classified: "sub_head", code: "210A2", description: "ບ້ານ", input_type: "choice", options: provinceOptions, main_key : "210A" },
        { classified: "sub_head", code: "210A3", description: "ເມືອງ", input_type: "choice", options: districtOptions, main_key : "210A" },
        { classified: "sub_head", code: "210A4", description: "ແຂວງ", input_type: "choice", options: villageOptions, main_key : "210A" },
        { classified: "sub_head", code: "210A5", description: "ເຂດເສດຖະກິດພິເສດ", input_type: "choice", options: specialAreaOptions, main_key : "210A" },
      
        { classified: "title", code: "210B", description: "ແຜນທີ່ໂຮງງານ", input_type: "file-P" },
        { classified: "title", code: "210C", description: "ຕຳແໜ່ງພິກັດ GPS (ລະບົບ UTM)", input_type: "text" },
        { classified: "sub_head", code: "210C1", description: "Zone", input_type: "text", main_key : "210C" },
        { classified: "sub_head", code: "210C2", description: "ພິກັດ Easting: E", input_type: "text", main_key : "210C" },
        { classified: "sub_head", code: "210C3", description: "ພິກັດ Northing: N", input_type: "text", main_key : "210C" },
      ],
      form220: [
        { classified: "heading", code: "220", description: "ສະພາບພື້ນທີ່ອ້ອມຂ້າງໂຮງງານ", input_type: null },
        { classified: "title", code: "220A", description: "ພື້ນທີ່ຕິດກັບໂຮງງານ", input_type: null },
        { classified: "sub_head", code: "220A1", description: "ທິດເໜືອ", input_type: "text", main_key : "220A" },
        { classified: "sub_head", code: "220A2", description: "ທິດໃຕ້", input_type: "text", main_key : "220A" },
        { classified: "sub_head", code: "220A3", description: "ທິດຕາເວັນອອກ", input_type: "text", main_key : "220A" },
        { classified: "sub_head", code: "220A4", description: "ທິດຕາເວັນຕົກ", input_type: "text", main_key : "220A" },
  
        { classified: "title", code: "220B", description: "ແຜນຜັງສະແດງໃຫ້ເຫັນທີ່ຕັ້ງໂຮງງານ ໃນຂອບເຂດລັດສະໝີ 500 ແມັດ", input_type: "file-P" },
        { classified: "title", code: "220C", description: "ພື້ນທີ່ອ້ອມຂ້າງໂຮງງານ ", input_type: null },
        { classified: "sub_head", code: "220C1", description: "ຊຸມຊົນ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C2", description: "ແຫຼ່ງນໍ້າ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C3", description: "ໂຮງຮຽນ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C4", description: "ໂຮງໝໍ ຫຼື ສຸກສາລາ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C5", description: "ວັດວາອາຮາມ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C6", description: "ສະຖານທີ່ປະຫວັດສາດ ຫຼື ບູຮານວັດຖຸ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C7", description: "ເຂດອະນຸລັກຊີວະນານາພັນ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C8", description: "ແຫຼ່ງທ່ອງທ່ຽວ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C9", description: "ອື່ນໆ (ລະບຸ)", input_type: "text", main_key : "220C" },
      ],
      form230: [
        { classified: "heading", code: "230", description: "ການນຳໃຊ້ພື້ນທີ່, ອາຄານ ແລະ ສິ່ງປຸກສ້າງພາຍໃນໂຮງງານ", input_type: null },
        { classified: "title", code: "231", description: "ເນື້ອທີ່ ແລະ ການນຳໃຊ້ພື້ນທີ່", input_type: null },
        { classified: "sub_head", code: "231A", description: "ເນື້ອທີ່ທັງໝົດ (ຕາແມັດ)", input_type: "number", main_key : "231" },
        { classified: "sub_head", code: "231B", description: "ພື້ນທີ່ສີຂຽວ (ສ່ວນຮ້ອຍ)", input_type: "number", main_key : "231" },
        { classified: "sub_head", code: "231C", description: "ການນຳໃຊ້ພື້ນທີ່", input_type: "T2-1", column:{columnHead:[{id:1, title:"ລຳດັບ", inputType:"No"},{id:2, title:"ຊື່ພື້ນທີ່", inputType:"text-area" },{id:3, title:"ເນື້ອທີ່ (ຕາແມັດ)", inputType:"text-area" },{id:4, title:"ສ່ວນຮ້ອຍ", inputType:"text-area" },{id:5, title:"ໝາຍເຫດ", inputType:"text-area" }] }, main_key : "231"},
        { classified: "sub_head", code: "231D", description: "ແຜນຜັງການນຳໃຊ້ພື້ນທີ່", input_type: "file-P", main_key : "231" },
      
        { classified: "title", code: "232", description: "ອາຄານ ແລະ ສິ່ງປຸກສ້າງ", input_type: null },
        { classified: "sub_head", code: "232A", description: "ຈຳນວນອາຄານ ແລະ ສິ່ງປຸກສ້າງ", input_type: "text", main_key : "232" },
        { classified: "sub_head", code: "232B", description: "ຂໍ້ມູນອາຄານ ແລະ ສິ່ງແວດລ້ອມ", input_type: "T2-2", column:{columnHead:[{id:1, title:"ລຳດັບ", inputType:"No"},{id:2, title:"ຊື່ອາຄານ", inputType:"text-area" },{id:3, title:"ລັກສະນະອາຄານ", inputType:"text-area" },{id:4, title:"ຂະໜາດອາຄານ", inputType:"text-area" },{id:5, title:"ການນຳໃຊ້/ການນຳໃຊ້ສະເພາະ", inputType:"text-area" }] }, main_key : "232" },
        { classified: "sub_head", code: "232C", description: "ໃບອະນຸຍາດປຸກສ້າງໂຮງງານ ເລກທີ", input_type: "text", main_key : "232" },
      
        { classified: "title", code: "232D", description: "ແຜນຜັງການກໍ່ສ້າງ ແລະ ລະບົບເຕັກນິກໂຮງງານ", input_type: null },
        { classified: "sub_head", code: "232D1", description: "ແຜນຜັງສະແດງສິ່ງປຸກສ້າງໃນບໍລິເວນໂຮງງານ", input_type: "file-P", main_key : "232D" },
        { classified: "sub_head", code: "232D2", description: "ແຜນຜັງກໍ່ສ້າງອາຄານຜະລິດ (ຮູບດ້ານໜ້າ, ຂ້າງ, ຫຼັງ ແລະ ຮູບຕັດ)", input_type: "file-P", main_key : "232D" },
        { classified: "sub_head", code: "232D3", description: "ແຜນຜັງການກໍ່ສ້າງສາງເກັບມ້ຽນເຄມີ", input_type: "file-P", main_key : "232D" },
      ],
      form240: [
        { classified: "heading", code: "240", description: "ອາຄານ ແລະ ພື້ນທີ່ຄວບຄຸມ ", input_type: null },
        { classified: "sub_head", code: "240A", description: "ຫ້ອງເກັບສານເຄມີ", input_type: "text", main_key : "240" },
        { classified: "sub_head", code: "240B", description: "ຫ້ອງເກັບສິ່ງເສດເຫຼືອເຄມີ", input_type: "text", main_key : "240" },
        { classified: "sub_head", code: "240C", description: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບວັດຖຸດິບ", input_type: "text", main_key : "240" },
        { classified: "sub_head", code: "240D", description: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບເຊື້ອໄຟ", input_type: "text", main_key : "240" },
      ],
      form250: [
        { classified: "heading", code: "250", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
        { classified: "sub_head", code: "250A", description: "ໃບອະນຸຍາດນຳໃຊ້ທີ່ດິນ", input_type: "text", main_key : "250" },
        { classified: "sub_head", code: "250B", description: "ໃບອະນຸຍາດປຸກສ້າງໂຮງງານ", input_type: "text", main_key : "250" },
        { classified: "sub_head", code: "250C", description: "ໃບອະນຸຍາດສ້າງສາງເກັບມ້ຽນເຄມີ", input_type: "text", main_key : "250" },
      ]
    }
    //*********** ******************************** 300 *******************************************/
    export const form300:any = {
      form310: [
        { classified: "heading", code: "310", description: "ການນຳໃຊ້ວັດຖຸດິບ, ເຊື້ອໄຟ ແລະ ສານເຄມີ", input_type: null },
        { classified: "title", code: "311", description: "ວັດຖຸດິບ", input_type: null },
        { classified: "sub_head", code: "311A", description: "ວັດຖຸດິບທັງໝົດ (ຊະນິດ)", input_type: "number", main_key : "311" },
        { classified: "sub_head", code: "311B", description: "ຂໍ້ມູນວັດຖຸດິບ", input_type: "T3-1",
          column:{
            columnHead:[
                        {id:1, title:"ລຳດັບ", inputType:"No"},
                        {id:2, title:"ຊື່ວັດຖຸດິບ", inputType:"text-area"},
                        {id:3, title:"ແຫຼ່ງທີ່ມາ", inputType:"text-area" },
                        {id:4, title:"HS Code", inputType:"text-area" },
                        {id:5, title:"ປະລິມານການໃຊ້", inputType:"text-area" },
                        {id:6, title:"ການຂົນສົ່ງ", inputType:"text-area" },
                        {id:7, title:"ການບັນຈຸ", inputType:"text-area" },
                        {id:8, title:"ສະຖານທີ່ເກັບ", inputType:"text-area" },
                        {id:9, title:"ຂະບວນການນຳໃຊ້", inputType:"text-area" },
                        {id:10, title:"ໝາຍເຫດ", inputType:"text-area" },
                        {id:11, title:"ຄວບຄຸມ/ບໍ່ຄວບຄຸມ", inputType:"text-area" },
                        {id:12, title:"311C ຮູບພາບວັດຖຸດິບ ແລະ ການຈັດເກັບ", inputType:"file" },
                      ] 
                    } , main_key : "311"
                  },
        { classified: "sub_head", code: "311D", description: "ມາດຕະການສຳລັບນຳເຂົ້າວັດຖຸດິບຄວບຄຸມ", input_type: "text", main_key : "311" },
        { classified: "sub_head", code: "311E", description: "ມາດຕະການສຳລັບການຕິດຕາມກວດກາ", input_type: "text", main_key : "311" },
      
        { classified: "title", code: "312", description: "ເຊື້ອໄຟ", input_type: null },
        { classified: "sub_head", code: "312A", description: "ເຊື້ອໄຟທີ່ນຳໃຊ້ (ຊະນິດ)", input_type: "number", main_key : "312" },
        { classified: "sub_head", code: "312B", description: "ຂໍ້ມູນການໃຊ້ເຊື້ອໄຟ", input_type: "T3-2", 
          column:{
            columnHead:[
                        {id:1, title:"ລຳດັບ", inputType:"No"},
                        {id:2, title:"ປະເພດເຊື້ອໄຟ", inputType:"text-area"},
                        {id:3, title:"ແຫຼ່ງທີ່ມາ", inputType:"text-area" },
                        {id:4, title:"ປະລິມານການນຳໃຊ້", inputType:"text-area" },
                        {id:5, title:"ປະລິມານການກັກເກັບ", inputType:"text-area" },
                        {id:6, title:"ການຂົນສົ່ງ", inputType:"text-area" },
                        {id:7, title:"ການບັນຈຸ", inputType:"text-area" },
                        {id:8, title:"ສະຖານທີ່ເກັບ", inputType:"text-area" },
                        {id:9, title:"ຂະບວນການນຳໃຊ້", inputType:"text-area" },
                        {id:10, title:"ໝາຍເຫດ", inputType:"text-area" },
                      ] 
                    }, main_key : "312"
                 },
        { classified: "sub_head", code: "312C", description: "ຮູບພາບເຊື້ອໄຟ ແລະ ການຈັດເກັບ", input_type: "file-P", main_key : "312" },
  
        { classified: "title", code: "313", description: "ສານເຄມີ", input_type: null },
        { classified: "sub_head", code: "313A", description: "ສານເຄມີທັງໝົດທີ່ນຳໃຊ້ (ຊະນິດ)", input_type: "number", main_key : "313" },
        { classified: "sub_head", code: "313B", description: "ປະລິມານສານເຄມີທັງໝົດທີ່ນຳໃຊ້ (kg)", input_type: "number", main_key : "313" },
  
        { classified: "title", code: "313C", description: "ປະເພດສານເຄມີເປັນພິດອັນຕະລາຍ", input_type: null },
        { classified: "sub_head", code: "313C1", description: "ສານເຄມີປະເພດ 1 (ຊະນິດ)", input_type: "number", main_key : "313C" },
        { classified: "sub_head", code: "313C2", description: "ສານເຄມີປະເພດ 2 (ຊະນິດ)", input_type: "number", main_key : "313C" },
        { classified: "sub_head", code: "313C3", description: "ສານເຄມີປະເພດ 3 (ຊະນິດ)", input_type: "number", main_key : "313C" },
        { classified: "sub_head", code: "313C4", description: "ສານເຄມີປະເພດ 4 (ຊະນິດ)", input_type: "number", main_key : "313C" },
        { classified: "sub_head", code: "313C5", description: "ສານເຄມີປະເພດອື່ນໆ (ຊະນິດ)", input_type: "number", main_key : "313C" },
  
        { classified: "sub_head", code: "313D", description: "ສານເຄມີ ແລະ ການນຳໃຊ້", input_type: "T3-3", 
          column:{
            columnHead:[
                        {id:1, title:"ລຳດັບ", inputType:"No"},
                        {id:2, title:"ຊື່ສານເຄມີ", inputType:"text-area"},
                        {id:3, title:"ແຫຼ່ງທີ່ມາ", inputType:"text-area" },
                        {id:4, title:"ປະລິມານທີ່ໃຊ້ຕໍ່ປີ", inputType:"text-area" },
                        {id:5, title:"ປະລິມານກັກເກັບ", inputType:"text-area" },
                        {id:6, title:"ການຂົນສົ່ງ", inputType:"text-area" },
                        {id:7, title:"ການບັນຈຸ", inputType:"text-area" },
                        {id:8, title:"ສະຖານທີ່ເກັບ", inputType:"text-area" },
                        {id:9, title:"ຂະບວນການນຳໃຊ້", inputType:"text-area" },
                        {id:10, title:"ໝາຍເຫດ", inputType:"text-area" },
                      ] 
                    }, main_key : "313"
                   },
        { classified: "sub_head", code: "313E", description: "ຮູບພາບສານເຄມີ", input_type: "file-P", main_key : "313" },
        { classified: "sub_head", code: "313F", description: "ຂໍ້ມູນຄວາມເປັນພິດອັນຕະລາຍຂອງສານເຄມີ", input_type: "T3-4", 
          column:{
            columnHead:[
                        {id:1, title:"ລຳດັບ", inputType:"No"},
                        {id:2, title:"ຊື່ສານເຄມີ", inputType:"text-area"},
                        {id:3, title:"ລັກສະນະທາງກາຍະພາບ", inputType:"text-area" },
                        {id:4, title:"ຄຸນລັກສະນະອັນຕະລາຍ", inputType:"text-area" },
                        {id:5, title:"HS Code", inputType:"text-area" },
                        {id:6, title:"ປະເພດສານເຄມີອັນຕະລາຍ", inputType:"text-area" },
                        {id:7, title:"ອົງປະກອບຫຼັກຂອງເຄມີ", inputType:"text-area" },
                        {id:8, title:"C.A.S No.", inputType:"text-area" },
                      ] 
                    }, main_key : "313"
                  },
  
  
      ],
      form320: [
        { classified: "heading", code: "320", description: "ຜະລິດຕະພັນ", input_type: null },
        { classified: "title", code: "321", description: "ຜະລິດຕະພັນຫຼັກ", input_type: null },
        { classified: "sub_head", code: "321A", description: "ຜະລິດຕະພັນ (ຊະນິດ)", input_type: "number", main_key : "321" },
        { classified: "sub_head", code: "321B", description: "ກຳລັງການຜະລິດປົກກະຕິຕໍ່ປີ", input_type: "text", main_key : "321" },
        { classified: "sub_head", code: "321C", description: "ກຳລັງການຜະລິດສູງສຸດຕໍ່ປີ", input_type: "text", main_key : "321" },
        { classified: "sub_head", code: "321D", description: "ຂໍ້ມູນຜະລິດຕະພັນ", input_type: "T3-5", 
          column:{
            columnHead:[
                        {id:1, title:"ລຳດັບ", inputType:"No"},
                        {id:2, title:"ຊື່ຜະລິດຕະພັນ", inputType:"text-area"},
                        {id:3, title:"ກຳລັງການຜະລິດປົກກະຕິ", inputType:"text-area" },
                        {id:4, title:"ກຳລັງການຜະລິດສູງສຸດ", inputType:"text-area" },
                        {id:5, title:"ການບັນຈຸ", inputType:"text-area" },
                        {id:6, title:"ສະຖານທີ່ເກັບ", inputType:"text-area" },
                        {id:7, title:"ການຂົນສົ່ງ", inputType:"text-area" },
                        {id:8, title:"ແຫຼ່ງຈຳໜ່າຍ", inputType:"text-area" },
                        {id:9, title:"HS Code", inputType:"text-area" },
                      ] 
                    }, main_key : "321" },
        { classified: "sub_head", code: "321E", description: "ຮູບພາບຜະລິດຕະພັນ", input_type: "file-P", main_key : "321" },
  
        { classified: "title", code: "322", description: "ຜະລິດຕະພັນຂ້າງຄຽງ", input_type: null },
        { classified: "sub_head", code: "322A", description: "ຜະລິດຕະພັນຂ້າງຄຽງ (ຊະນິດ)", input_type: "text", main_key : "322" },
        { classified: "sub_head", code: "322B", description: "ຂໍ້ມູນຜະລິດຕະພັນຂ້າງຄຽງ", input_type: "T3-6", 
          column:{
            columnHead:[
                        {id:1, title:"ລຳດັບ", inputType:"No"},
                        {id:2, title:"ຊື່ຜະລິດຕະພັນຂ້າງຄຽງ", inputType:"text-area"},
                        {id:3, title:"ປະລິມານ", inputType:"text-area" },
                        {id:4, title:"ມາຈາກຂະບວນການ", inputType:"text-area" },
                        {id:5, title:"ການບັນຈຸ", inputType:"text-area" },
                        {id:6, title:"ສະຖານທີ່ເກັບ", inputType:"text-area" },
                      ] 
                    }, main_key : "322" },
        { classified: "sub_head", code: "322C", description: "ຮູບພາບຜະລິດຕະພັນຂ້າງຄຽງ", input_type: "file-P", main_key : "322" },
      ],
      form330: [
        { classified: "heading", code: "330", description: "ການນຳໃຊ້ເຄື່ອງຈັກ, ແຮງງານ, ຊັບພະຍາກອນນ້ຳ ແລະ ພະລັງງານໄຟຟ້າ", input_type: null },
        { classified: "title", code: "331", description: "ການນຳໃຊ້ເຄື່ອງຈັກຫຼັກໃນການຜະລິດ", input_type: null },
        { classified: "sub_head", code: "331A", description: "ກຳລັງເຄື່ອງຈັກໃນໂຮງງານ", input_type: "text", main_key : "331" },
        { classified: "sub_head", code: "331B", description: "ຂໍ້ມູນເຄື່ອງຈັກໃນໂຮງງານ", input_type: "T3-7",
           column:{
            columnHead:[
                        {id:1, title:"ລຳດັບ", inputType:"No"},
                        {id:2, title:"ຊື່ເຄື່ອງຈັກ", inputType:"text-area"},
                        {id:3, title:"ລາຍລະອຽດ", inputType:"text-area" },
                        {id:4, title:"ຈຳນວນ", inputType:"text-area" },
                        {id:5, title:"ປະເທດຜູ້ຜະລິດ", inputType:"text-area" },
                        {id:6, title:"ແຮງມ້າ/ແຮງມ້າປຽບທຽບ", inputType:"text-area" },
                        {id:7, title:"ແຮງມ້າລວມ", inputType:"text-area" },
                      ] 
                    }, main_key : "331" },
        { classified: "sub_head", code: "331C", description: "ຮູບເຄື່ອງຈັກ", input_type: "file", main_key : "331" },
        { classified: "sub_head", code: "331D", description: "ແຜນຜັງຕິດຕັ້ງເຄື່ອງຈັກ", input_type: "file", main_key : "331" },
        { classified: "sub_head", code: "331E", description: "ແຜນຜັງຕິດຕັ້ງເຄື່ອງຍົກນ້ຳໜັກ, ແຜນຜັງຕິດຕັ້ງເຕົາອົບ ແລະ ເຕົາສະຕີມ", input_type: "file", main_key : "331" },
      
        { classified: "title", code: "332", description: "ການນຳໃຊ້ແຮງງານ", input_type: null },
        { classified: "sub_head", code: "332A", description: "ຈຳນວນຜຽນ (ຜຽນ)", input_type: "number", main_key : "332" },
        { classified: "sub_head", code: "332B", description: "ຂໍ້ມູນການເຮັດວຽກ", input_type: "T3-8", 
          column:{
            columnHead:[
                        {id:1, title:"ຜຽນ", inputType:"text-area"},
                        {id:2, title:"ຈຳນວນຜູ້ອອກແຮງ", inputType:"text-area"},
                        {id:3, title:"ເວລາເຮັດວຽກ", inputType:"text-area" },
                        {id:4, title:"ເວລາ (ຊົ່ວໂມງ)", inputType:"text-area" },
                        {id:5, title:"ໝາຍເຫດ", inputType:"text-area" },
                      ] 
                    }, main_key : "332"},
        { classified: "sub_head", code: "332C", description: "ຈຳນວນຜູ້ອອກແຮງງານລວມ (ຄົນ)", input_type: "number", main_key : "332" },
      
        { classified: "title", code: "332D", description: "ປະເພດແຮງງານ", input_type: null },
        { classified: "sub_head", code: "332D1", description: "ພະນັກງານ-ວິຊາການ-ຊ່ຽວຊານ (ຄົນ)", input_type: "number", main_key : "332D" },
        { classified: "sub_head", code: "332D2", description: "ແຮງງານຜະລິດ (ຄົນ)", input_type: "number", main_key : "332D" },
  
        { classified: "title", code: "332E", description: "ເພດ", input_type: null },
        { classified: "sub_head", code: "332E1", description: "ຜູ້ຊາຍ (ຄົນ)", input_type: "number", main_key : "332E" },
        { classified: "sub_head", code: "332E2", description: "ຜູ້ຍິງ (ຄົນ)", input_type: "number", main_key : "332E" },
  
        { classified: "title", code: "332F", description: "ກຸ່ມແຮງງານ", input_type: null },
        { classified: "sub_head", code: "332F1", description: "ຜູ້ອອກແຮງງານພາຍໃນປະເທດ (ຄົນ)", input_type: "number", main_key : "332F" },
        { classified: "sub_head", code: "332F2", description: "ຜູ້ອອກແຮງງານຕ່າງປະເທດ (ຄົນ)", input_type: "number", main_key : "332F" },
  
        { classified: "title", code: "332G", description: "ການໃຊ້ຜູ້ຮັບເໝົາ (ບໍ່ປະຈຳ)", input_type: null },
        { classified: "sub_head", code: "332G1", description: "ການນຳໃຊ້", input_type: "text", main_key : "332G" },
        { classified: "sub_head", code: "332G2", description: "ຄວາມຖີ່ໃນການໃຊ້", input_type: "text", main_key : "332G" },
        { classified: "sub_head", code: "332G3", description: "ຈຳນວນ (ຄົນ)", input_type: "number", main_key : "332G" },
  
        { classified: "title", code: "333", description: "ການນຳໃຊ້ນ້ຳ ແລະ ການກັກເກັບ", input_type: null },
        { classified: "sub_head", code: "333A", description: "ປະລິມານການນຳໃຊ້ນ້ຳທັງໝົດ (ແມັດກ້ອນ)", input_type: "number", main_key : "333" },
        { classified: "sub_head", code: "333B", description: "ການນຳໃຊ້ນ້ຳປະປາ", input_type: "text", main_key : "333" },
        { classified: "sub_head", code: "333B1", description: "ປະລິມານນຳໃຊ້ (ແມັດກ້ອນ)", input_type: "number", main_key : "333" },
        { classified: "sub_head", code: "333B2", description: "ຂະໜາດມິເຕີ້", input_type: "text", main_key : "333" },
        { classified: "sub_head", code: "333B3", description: "ຂະໜາດທໍ່", input_type: "text", main_key : "333" },
        
        { classified: "title", code: "333C", description: "ການນຳໃຊ້ນ້ຳໜ້າດິນ", input_type: null },
        { classified: "sub_head", code: "333C1", description: "ຂະໜາດການນຳໃຊ້ນ້ຳ", input_type: "choice", options: sizeOptions, main_key : "333C" },
        { classified: "sub_head", code: "333C2", description: "ປະລິມານການໃຊ້ (ແມັດກ້ອນ)", input_type: "number", main_key : "333C" },
        { classified: "sub_head", code: "333C3", description: "ແຫຼ່ງນ້ຳໜ້າດິນທີ່ນຳໃຊ້", input_type: "text", main_key : "333C" },
        
        { classified: "title", code: "333D", description: "ການນຳໃຊ້ນໍ້າໃຕ້ດິນ", input_type: null },
        { classified: "sub_head", code: "333D1", description: "ຂະໜາດການນຳໃຊ້ນ້ຳໃຕ້ດິນ", input_type: "choice", options: sizeOptions, main_key : "333D" },
        { classified: "sub_head", code: "333D2", description: "ປະລິມານການໃຊ້ (ແມັດກ້ອນ)", input_type: "number", main_key : "333D" },
        { classified: "sub_head", code: "333D3", description: "ຈຳນວນບໍ່ນ້ຳບາດານ/ບໍ່ນ້ຳສ້າງ (ຈຸດ)", input_type: "number", main_key : "333D" },
        { classified: "sub_head", code: "333D4", description: "ຂໍ້ມູນບໍ່ນ້ຳບາດານ/ບໍ່ນ້ຳສ້າງ", input_type: "T3-9",
           column:{
            columnHead:[
                        {id:1, title:"ບໍນ້ຳບາດານ/ນ້ຳສ້າງ ເລກທີ", inputType:"text-area"},
                        {id:2, title:"ພິກັດ", inputType:"text-area"},
                        {id:3, title:"ຄວາມເລິກ", inputType:"text-area" },
                        {id:4, title:"ຂະໜາດປ້ຳ", inputType:"text-area" },
                      ] 
                    }, main_key : "333D"
                  },
        { classified: "sub_head", code: "333D5", description: "ແຜນຜັງບໍ່ນ້ຳບາດານ/ບໍ່ນ້ຳສ້າງ", input_type: "file", main_key : "333D" },
        { classified: "sub_head", code: "333D6", description: "ໝໍ້ວັດປະລິມານການນຳໃຊ້ນ້ຳໃຕ້ດິນ", input_type: "choice", options: haveOrNoOptions, main_key : "333D" },
        
        { classified: "title", code: "333E", description: "ການນຳໃຊ້ນ້ຳຄືນໃໝ່", input_type: null },
        { classified: "sub_head", code: "333E1", description: "ການນຳໃຊ້ນ້ຳຄືນໃໝ່", input_type: "choice", options: haveOrNoOptions, main_key : "333E" },
        { classified: "sub_head", code: "333E2", description: "ນຳໃຊ້ໃນຂະບວນການ", input_type: "text", main_key : "333E" },
  
        { classified: "sub_head", code: "333F", description: "ຂໍ້ມູນການໃຊ້ນ້ຳເຂົ້າໃນການອຸປະໂພກ", input_type: "T3-10", 
          column:{
            columnHead:[
                        {id:1, title:"ລຳດັບ", inputType:"No"},
                        {id:2, title:"ປະເພດນ້ຳໃຊ້", inputType:"text-area"},
                        {id:3, title:"ການນຳໃຊ້", inputType:"text-area" },
                        {id:4, title:"ປະລິມານນຳໃຊ້", inputType:"text-area" },
                      ] 
                    }, main_key : "333E"
                  },
        { classified: "sub_head", code: "333G", description: "ຂໍ້ມູນການນຳໃຊ້ນ້ຳເຂົ້າໃນການຜະລິດ", input_type: "T3-11",
           column:{
            columnHead:[
                        {id:1, title:"ລຳດັບ", inputType:"No"},
                        {id:2, title:"ຊື່ຂະບວນການ", inputType:"text-area"},
                        {id:3, title:"ປະເພດນ້ຳໃຊ້", inputType:"text-area" },
                        {id:4, title:"ປະລິມານນຳໃຊ້", inputType:"text-area" },
                      ] 
                    }, main_key : "333E"
                  },
        { classified: "sub_head", code: "333H", description: "ການກັກເກັບ (ຈຸດ)", input_type: "number", main_key : "333E" },
        { classified: "sub_head", code: "333I", description: "ປະລິມານກັກເກັບລວມ (ແມັດກ້ອນ)", input_type: "number", main_key : "333E" },
        { classified: "sub_head", code: "333J", description: "ຂໍ້ມູນການກັກເກັບນ້ຳ", input_type: "T3-12", 
          column:{
            columnHead:[
                        {id:1, title:"ລຳດັບ", inputType:"No"},
                        {id:2, title:"ປະເພດການກັກເກັບ", inputType:"text-area"},
                        {id:3, title:"ປະລິມານການກັກເກັບ (ແມັດກ້ອນ)", inputType:"text-area" },
                        {id:4, title:"ຂະໜາດຂອງອ່າງ, ໜອງ", inputType:"text-area" },
                        {id:5, title:"ຂະໜາດ", inputType:"text-area" },
                      ] 
                    }, main_key : "333E"
                  },
  
        { classified: "title", code: "334", description: "ການນຳໃຊ້ໄຟຟ້າ", input_type: null },
        { classified: "sub_head", code: "334A", description: "ຂະໜາດຂ່າຍສານໄຟຟ້າ", input_type: "text", main_key : "334" },
        { classified: "sub_head", code: "334B", description: "ຈຳນວນໝໍ້ແປງ ແລະ ຂະໜາດ (KVA)", input_type: "text", main_key : "334" },
        { classified: "sub_head", code: "334C", description: "ຂະໜາດໝໍ້ແປງລວມ (KVA)", input_type: "number", main_key : "334" },
        { classified: "sub_head", code: "334D", description: "ພະລັງງານໄຟຟ້າສະເລ່ຍ (Kw/ມື້)", input_type: "number", main_key : "334" },
        { classified: "sub_head", code: "334E", description: "ໄຟຟ້າສຳຮອງ", input_type: "text", main_key : "334" },
        { classified: "sub_head", code: "334F", description: "ແຜນຜັງຕິດຕັ້ງລະບົບໄຟຟ້າ", input_type: "file", main_key : "334" },
      ],
      form340: [
        { classified: "heading", code: "340", description: "ຂະບວນການຜະລິດຫຼັກ ແລະ ສະໜັບສະໜຸນ", input_type: null },
        { classified: "title", code: "341", description: "ຫ້ອງເກັບສານເຄມີ", input_type: null },
        { classified: "sub_head", code: "341A", description: "ຈຳນວນສາຍ, ຊຸດການຜະລິດ", input_type: "number", main_key : "341" },
        { classified: "sub_head", code: "341B", description: "ຮູບແບບການຜະລິດ", input_type: "choice", options: processOptions, main_key : "341" },
        { classified: "sub_head", code: "341C", description: "ແຜນວາດຂະບວນການຜະລິດ (Workflow)", input_type: "file", main_key : "341" },
        { classified: "sub_head", code: "341D", description: "ຂໍ້ມູນຂະບວນການຜະລິດ", input_type: "T3-13",
           column:{
            columnHead:[
                        {id:1, title:"ລຳດັບ", inputType:"No"},
                        {id:2, title:"ຊື່ຂັ້ນຕອນ", inputType:"text-area"},
                        {id:3, title:"ອະທິບາຍໂດຍຫຍໍ້", inputType:"text-area" },
                        {id:4, title:"ວັດຖຸດິບທີ່ນຳໃຊ້", inputType:"text-area" },
                        {id:5, title:"ສານເຄມີທີ່ນຳໃຊ້", inputType:"text-area" },
                      ] 
                    }, main_key : "341"
                   },
        { classified: "sub_head", code: "341E", description: "ຮູບພາບຂະບວນການຜະລິດ", input_type: "file", main_key : "341" },
  
        { classified: "title", code: "342", description: "ຂະບວນການສະໜັບສະໜຸນ ແລະ ກິດຈະກຳທີ່ເຮັດໃຫ້ເກີດສິ່ງເສດເຫຼືອ ແລະ ມົນລະພິດສິ່ງແວດລ້ອມ", input_type: null },
        { classified: "sub_head", code: "342A", description: "ໜ່ວຍສ້ອມແປງ ແລະ ບຳລຸງຮັກສາ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342B", description: "ລະບົບຜະລິດໄຟຟ້າ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342C", description: "ລະບົບປັບປຸງຄຸນນະພາບນ້ຳ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342D", description: "ໝໍ້ຕົ້ມນ້ຳ (Boiler)", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342E", description: "ຫໍຫຼໍ່ເຢັນ (Cooling Tower) ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342F", description: "ການກຽມວັດຖຸດິບ ແລະ ປະສົມສານເຄມີ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342G", description: "ການອະນາໄມ-ລ້າງທຳຄວາມສະອາດພື້ນທີ່ການຜະລິດ ແລະ ອື່ນໆ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342H", description: "ຫ້ອງປະຕິບັດການວິເຄາະ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342I", description: "ອື່ນໆ", input_type: "text", main_key : "342" },
      ],
      form350: [
        { classified: "heading", code: "350", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
        { classified: "sub_head", code: "350A", description: "ໃບຢັ້ງຢືນກ່ຽວກັບແຫຼ່ງທີ່ມາວັດຖຸດິບ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350B", description: "ໃບອະນຸຍາດນຳເຂົ້າ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350C", description: "ໃບທະບຽນບັນຊີເຄມີ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350D", description: "ເອກະສານຂໍ້ມູນຄວາມປອດໄພເຄມີ (safety data sheet)", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350E", description: "ໃບຢັ້ງຢືນຜົນການວິເຄາະເຄມີ (ກໍລະນີເປັນທາດປະສົມ)", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350F", description: "ສະຫຼາກເຄມີ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350G", description: "ໃບອະນຸຍາດນຳໃຊ້ນ້ຳໜ້າດິນ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350H", description: "ໃບອະນຸຍາດນຳໃຊ້ນ້ຳໃຕ້ດິນ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350I", description: "ໃບອະນຸຍາດຂຸດເຈາະ ຫຼື ຊີເຈາະນ້ຳໃຕ້ດິນ", input_type: "file", main_key : "350" },
      ]
    };
//************************************************ 400 ************************************************************************ */
export const form400:any = {
  form410: [
    { classified: "heading", code: "410", description: "ສິ່ງເສດເຫຼືອຈາກອາຄານສຳນັກງານ", input_type: null },
    { classified: "title", code: "411", description: "ສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ", input_type: null },
    { classified: "sub_head", code: "411A", description: "ປະລິມານສິ່ງເສດເຫຼືອລວມ (Kg/ເດືອນ)", input_type: "text", main_key : "411" },
    { classified: "sub_head", code: "411B", description: "ຂໍ້ມູນສິ່ງເສດເຫຼືອທົ່ວໄປ", input_type: "T4-1", 
      column:{
        columnHead:[
          {id:1, title:"ລຳດັບ", inputType:"No"},
          {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, title:"ແຫຼ່ງທີ່ມາ", inputType:"choice" },
          {id:5, title:"ປະລິມານ (Kg/ເດືອນ)", inputType:"text-area" },
          {id:6, title:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
          {id:7, title:"ການກຳຈັດ", inputType:"choice" }
        ]
        , options:[ 
          {forID:4, options: referentOptions},
          {forID:7, options: removalOptions}]
       } , main_key : "411"
      },
    { classified: "title", code: "412", description: "ສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ", input_type: null },
    { classified: "sub_head", code: "412A", description: "ຂໍ້ມູນສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍຈາກສຳນັກງານ, ອາຄານ", input_type: "T4-2", 
      column:{
        columnHead:[
          {id:1, title:"ລຳດັບ", inputType:"No"},
          {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, title:"ແຫຼ່ງທີ່ມາ", inputType:"choice" },
          {id:5, title:"ປະລິມານ (Kg/ປີ)", inputType:"text-area" },
          {id:6, title:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
          {id:7, title:"ການກຳຈັດ", inputType:"choice" }
        ]
        , options:[ 
          {forID:4, options: referentOptions},
          {forID:7, options: removalT4_2Options}]
       }, main_key : "412"
      },


    
  ],
  form420: [
    { classified: "heading", code: "420", description: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳ", input_type: null },
    { classified: "sub_head", code: "420A", description: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳ (ລາຍການ)", input_type: "number", main_key : "420" },
    { classified: "sub_head", code: "420B", description: "ປະລິມານສິ່ງເສດເຫຼືອອຸດສາຫະກຳ", input_type: "text", main_key : "420" },
    { classified: "sub_head", code: "420C", description: "ແຫຼ່ງກຳເນີດສິ່ງເສດເຫຼືອ", input_type: "T4-3", 
      column:{
        columnHead:[
          {id:1, title:"ລຳດັບ", inputType:"No"},
          {id:2, title:"ແຫຼ່ງກຳເນີດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, title:"ສິ່ງເສດເຫຼືອທີ່ເກີດ", inputType:"text-area" },
        ]
       } , main_key : "420"
       },
    { classified: "sub_head", code: "420D", description: "ແຜນຜັງການເກີດສິ່ງເສດເຫຼືອໃນຂະບວນການ", input_type: "file" , main_key : "420"},

    { classified: "title", code: "421", description: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳບໍ່ເປັນພິດອັນຕະລາຍ", input_type: null },
    { classified: "sub_head", code: "421A", description: "ສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ (ລາຍການ)", input_type: "number", main_key : "421" },
    { classified: "sub_head", code: "421B", description: "ປະລິມານສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ", input_type: "text", main_key : "421" },
    { classified: "sub_head", code: "421C", description: "ຂໍ້ມູນສິ່ງເສດເຫຼືອບໍ່ເປັນພິດ ແລະ ອັນຕະລາຍ", input_type: "T4-4", 
      column:{
        columnHead:[
          {id:1, title:"ລຳດັບ", inputType:"No"},
          {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, title:"ປະລິມານ (Kg/ເດືອນ)", inputType:"text-area" },
          {id:5, title:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
          {id:6, title:"ຮູບພາບ", inputType:"file" }
        ]
       }, main_key : "421" 
       },

    { classified: "title", code: "422", description: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳເປັນພິດອັນຕະລາຍ", input_type: null },
    { classified: "sub_head", code: "422A", description: "ສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ (ລາຍການ)", input_type: "number", main_key : "422" },
    { classified: "sub_head", code: "422B", description: "ປະລິມານສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ", input_type: "text", main_key : "422" },
    { classified: "sub_head", code: "422C", description: "ຂໍ້ມູນສິ່ງເສດເຫຼືອເປັນພິດ ແລະ ອັນຕະລາຍ", input_type: "T4-5", 
      column:{
        columnHead:[
          {id:1, title:"ລຳດັບ", inputType:"No"},
          {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, title:"ປະລິມານ (Kg/ເດືອນ)", inputType:"text-area" },
          {id:5, title:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
          {id:6, title:"ຮູບພາບ", inputType:"file" }
        ]
       }, main_key : "422"
       },
  ],
  form430: [
    { classified: "heading", code: "430", description: "ສະຖານທີ່ເກັບທ້ອນໂຮມສິ່ງເສດເຫຼືອ", input_type: null },
    { classified: "sub_head", code: "430A", description: "ຈຳນວນສະຖານທີ່ເກັບທ້ອນໂຮມສິ່ງເສດເຫຼືອ", input_type: "text", main_key : "430" },
    { classified: "sub_head", code: "430B", description: "ຂໍ້ມູນສະຖານທີ່ເກັບທ້ອນໂຮມສິ່ງເສດເຫຼືອ", input_type: "T4-6", 
      column:{
        columnHead:[
          {id:1, title:"ລຳດັບ", inputType:"No"},
          {id:2, title:"ຊື່ພື້ນທີ່ເກັບ", inputType:"text-area" },
          {id:3, title:"ປະລິມານສູງສຸດທີ່ສາມາດເກັບໄດ້ (Kg)", inputType:"text-area" },
          {id:4, title:"ເນື້ອທີ່", inputType:"text-area" },
          {id:5, title:"ປະເພດສິ່ງເສດເຫຼືອທີ່ຈັດເກັບ", inputType:"multi-choice" },
          {id:6, title:"ປະເພດສາງ", inputType:"choice" },
          {id:7, title:"ຮູບພາບ", inputType:"file" }
        ], 
        options:[ 
          {forID:5, options: typesOfStoredWasteOptions},
          {forID:6, options: typesOfWarehouseOptions}]
       }, main_key : "430"
       },
    { classified: "sub_head", code: "430C", description: "ແຜນຜັງສະຖານທີ່ເກັບສິ່ງເສດເຫຼືຶອ", input_type: "file", main_key : "430" },  
  ],
  form440: [
    { classified: "heading", code: "440", description: "ການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອ", input_type: null },
    { classified: "title", code: "441", description: "ການບຳບັດ-ກຳຈັດພາຍໃນ", input_type: null },
    { classified: "sub_head", code: "441A", description: "ຂໍ້ມູນການບຳບັດ-ກຳຈັດພາຍໃນໂຮງງານ", input_type: "T4-7", 
      column:{
        columnHead:[
          {id:1, title:"ລຳດັບ", inputType:"No"},
          {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, title:"ວິທີບຳບັດ-ກຳຈັດ", inputType:"text-area" },
        ]
       }, main_key : "441"
       },

    { classified: "title", code: "442", description: "ການບຳບັດ-ກຳຈັດພາຍນອກ", input_type: null },
    { classified: "sub_head", code: "442A", description: "ການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ", input_type: "T4-8", 
      column:{
        columnHead:[
          {id:1, title:"ລຳດັບ", inputType:"No"},
          {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, title:"ຜູ້ຮັບບຳບັດ-ກຳຈັດ", inputType:"text-area" },
          {id:5, title:"ວິທີບຳບັດ-ກຳຈັດ", inputType:"text-area" },
          {id:6, title:"ລະຫັດບຳບັດ-ກຳຈັດ", inputType:"multi-choice" },
          {id:7, title:"ຄວາມຖີ່ໃນການສົ່ງບຳບັດ-ກຳຈັດ", inputType:"file" }
        ],options:[ 
          {forID:6, options: groupedOptions}]
       }, main_key : "442" },
    { classified: "sub_head", code: "442B", description: "ການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ", input_type: "T4-9", 
      column:{
        columnHead:[
          {id:1, title:"ລຳດັບ", inputType:"No"},
          {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, title:"ຜູ້ຮັບບຳບັດ-ກຳຈັດ", inputType:"text-area" },
          {id:5, title:"ວິທີບຳບັດ-ກຳຈັດ", inputType:"text-area" },
          {id:6, title:"ລະຫັດບຳບັດ-ກຳຈັດ", inputType:"multi-choice" },
          {id:7, title:"ຄວາມຖີ່ໃນການສົ່ງບຳບັດ-ກຳຈັດ", inputType:"file" }
        ],options:[ 
          {forID:6, options: groupedOptions}]
       } , main_key : "442" 
      },
  ],
  form450: [
    { classified: "heading", code: "450", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
    { classified: "sub_head", code: "450A", description: "ຂໍ້ມູນລະອຽດການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອພາຍໃນໂຮງງານ", input_type: "file", main_key : "450" },
    { classified: "sub_head", code: "450B", description: "ໃບອະນຸຍາດໃຫ້ບໍລິການວິຊາການດ້ານສິ່ງແວດລ້ອມ", input_type: "file", main_key : "450" },
  ]
};
//************************************************ 500 ************************************************************************ */
    export const form500:any = {
      form510: [
          { classified: "heading", code: "500", description: "ການປ່ອຍນ້ຳເປື້ອນ", input_type: null },
          { classified: "sub_head", code: "510A", description: "ໃບອະນຸຍາດປ່ອຍສານມົນລະພິດ (ນ້ຳເປື້ອນ) ເລກທີ", input_type: "text", main_key : "500" },
          { classified: "sub_head", code: "510B", description: "ຈຳນວນຈຸດປ່ອຍນ້ຳເປື້ອນ", input_type: "number", main_key : "500" },
          { classified: "sub_head", code: "510C", description: "ປະລິມານການປ່ອຍລວມ (m3/ວັນ)", input_type: "number", main_key : "500" },
          { classified: "sub_head", code: "510D", description: "ຂໍ້ມູນຈຸດປ່ອຍນ້ຳເປື້ອນ (T5-1)", input_type: "T5-1",
        column: {
          columnHead: [
            { id:1, title:"ຈຸດລວບລວມ ຫຼື ປ່ອຍນ້ຳເປື້ອນເລກທີ", inputType:"text-area" },
            { id:2, title:"ປະລິມານການປ່ອຍ (m3/ວັນ)", inputType:"text-area" },
            { id:3, title:"ຄວາມຖີ່ໃນການປ່ອຍ", inputType:"text-area" },
            { id:4, title:"ການກວດກາວັດແທກ", inputType:"choice" },
            { id:5, title:"ໝາຍເຫດ", inputType:"text-area" }
          ],
          options:[
            { forID:4, options: haveOrNoOptions}
          ]
        }, main_key : "500"
           },
          { classified: "sub_head", code: "510E", description: "ການລະບາຍນ້ຳພາຍໃນໂຮງງານ (P5-1)", input_type: "file-P", main_key : "500" },
        ],
        form520: [
          { classified: "heading", code: "520", description: "ແຫຼ່ງນ້ຳເປື້ອນ", input_type: null },
          { classified: "title", code: "521", description: "ແຫຼ່ງທີ່ມາຂອງນ້ຳເປື້ອນຈາກອາຄານສຳນັກງານ ແລະ ການຄຸ້ມຄອງ", input_type: null },
          { classified: "sub_head", code: "521A", description: "ແຫຼ່ງທີ່ມາຂອງນ້ຳເປື້ອນຈາກອາຄານສຳນັກງານ (T5-2)", input_type: "T5-2", 
            column: {
              columnHead: [
                { id:1, title:"ລຳດັບ", inputType:"No" },
                { id:2, title:"ອາຄານ", inputType:"text-area" },
                { id:3, title:"ເນື້ອທີ່ອາຄານ", inputType:"choice" },
                { id:4, title:"ປະລິມານນ້ຳເປື້ອນ", inputType:"text-area" },
                { id:5, title:"ມາດຕະຖານຄຸ້ມຄອງ", inputType:"choice" },
                { id:6, title:"ຈຸດລວບລວມ ຫຼື ປ່ອຍນ້ຳເປື້ອນເລກທີ", inputType:"text-area" }
              ],
              options:[
                { forID:3, options: areaOptions},
                { forID:5, options: coverStandardOptions}
              ]
            } , main_key : "521"},
          { classified: "title", code: "522", description: "ແຫຼ່ງທີ່ມາຂອງນ້ຳເປື້ອນຈາກການຜະລິດ ແລະ ການຄຸ້ມຄອງ", input_type: null },
          { classified: "sub_head", code: "522A", description: "ແຫຼ່ງທີ່ມາຂອງນ້ຳເປື້ອນຈາກການຜະລິດ (T5-3)", input_type: "T5-3" , 
            column: {
              columnHead: [
                { id:1, title:"ລຳດັບ", inputType:"No" },
                { id:2, title:"ຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                { id:3, title:"ໝາຍເຫດ", inputType:"text-area" },
              ],
            } , main_key : "522"},
          { classified: "sub_head", code: "522B", description: "ແຜນຜັງການເກີດນ້ຳເປື້ອນໃນຂະບວນການ (P5-2)", input_type: "file-P", main_key : "522"},
        ],
        form530: [
          { classified: "heading", code: "530", description: "ຄຸນນະພາບນ້ຳກ່ອນດຳເນີນກິດຈະການ", input_type: null },
          { classified: "title", code: "531", description: "ຄຸນນະພາບນ້ຳໜ້າດິນກ່ອນດຳເນີນກິດຈະການ", input_type: null },
          { classified: "sub_head", code: "531A", description: "ຈຳນວນຈຸດເກັບຕົວຢ່າງນ້ຳໜ້າດິນກ່ອນດຳເນີນກິດຈະການ", input_type: "number", main_key : "531" },
          { classified: "sub_head", code: "531B", description: "ຂໍ້ມູນຈຸດກວດກາວັດແທກ (T5-4)", input_type: "T5-4", 
            column: {
              columnHead: [
                { id:1, title:"ລຳດັບ", inputType:"No" },
                { id:2, title:"ຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                { id:3, title:"ພິກັດ gps", inputType:"text-area" },
                { id:4, title:"ໝາຍເຫດ", inputType:"text-area" },
              ],
            } , main_key : "531"
           },

          { classified: "title", code: "532", description: "ຄຸນນະພາບນ້ຳໃຕ້ດິນກ່ອນດຳເນີນກິດຈະການ", input_type: null },
          { classified: "sub_head", code: "532A", description: "ຈຳນວນຈຸດເກັບຕົວຢ່າງນ້ຳໃຕ້ດິນກ່ອນດຳເນີນກິດຈະການ", input_type: "number", main_key : "532" },
          { classified: "sub_head", code: "532B", description: "ຂໍ້ມູນຈຸດກວດກາວັດແທກນ້ຳໃຕ້ດິນກ່ອນດຳເນີນກິດຈະການ (T5-5)", input_type: "T5-5", 
            column: {
              columnHead: [
                { id:1, title:"ລຳດັບ", inputType:"No" },
                { id:2, title:"ຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                { id:3, title:"ພິກັດ gps", inputType:"text-area" },
                { id:4, title:"ໝາຍເຫດ", inputType:"text-area" },
              ],
            } , main_key : "532"
           },
        ],
        form540: [
          { classified: "heading", code: "540", description: "ການຕິດຕາມກວດກາຄຸນນະພາບນ້ຳ", input_type: null },
          { classified: "title", code: "541", description: "ການຕິດຕາມກວດການ້ຳເປື້ອນ", input_type: null },
          { classified: "sub_head", code: "541A", description: "ຈຳນວນຈຸດຕິດຕາມກວດການ້ຳເປື້ອນ", input_type: "text", main_key : "541" },
          { classified: "sub_head", code: "541B", description: "ຂໍ້ມູນຈຸດຕິດຕາມກວດການ້ຳເປື້ອນ (T5-6)", input_type: "T5-6", 
            column: {
              columnHead: [
                { id:1, title:"ຈຸດກວດກາເລກທີ", inputType:"text-area" },
                { id:2, title:"ລາຍລະອຽດຈຸດເກັບຢ່າງ", inputType:"text-area" },
                { id:3, title:"ຄວາມຖີ່ໃນການກວດກາ", inputType:"text-area" },
                { id:4, title:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
              ],
            } , main_key : "541"
            },
          { classified: "sub_head", code: "541C", description: "ມາດຕະຖານຄວບຄຸມນ້ຳເປື້ອນ (T5-7)", input_type: "T5-7", duplicates: true,
            column: {
              columnHead: [
                { id:1, title:"ລຳດັບ", inputType:"No" },
                { id:2, title:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
                { id:3, title:"ສັນຍາລັກ", inputType:"text-area" },
                { id:4, title:"ມາດຕະຖານຄວບຄຸມ", inputType:"text-area" },
                { id:5, title:"ຫົວໜ່ວຍ", inputType:"text-area" },
                { id:6, title:"ວິທີການກວດກາວັດແທກ", inputType:"text-area" },
              ],
            } , main_key : "541"
           },
          
          { classified: "title", code: "542", description: "ການຕິດຕາມກວດກາຄຸນນະພາບນ້ຳໃຕ້ດິນ", input_type: null },
          { classified: "sub_head", code: "542A", description: "ຈຳນວນຈຸດຕິດຕາມກວດການ້ຳໃຕ້ດິນ", input_type: "text", main_key : "542" },
          { classified: "sub_head", code: "542B", description: "ຂໍ້ມູນຈຸດຕິດຕາມກວດການ້ຳໃຕ້ດິນ (T5-8)", input_type: "T5-8", 
            column: {
              columnHead: [
                { id:1, title:"ຈຸດກວດກາເລກທີ", inputType:"No" },
                { id:2, title:"ລາຍລະອຽດຈຸດເກັບຢ່າງ", inputType:"text-area" },
                { id:3, title:"ຄວາມຖີ່ໃນການກວດກາ", inputType:"text-area" },
                { id:4, title:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
              ],
            } , main_key : "542"
            },
          { classified: "sub_head", code: "542C", description: "ມາດຕະຖານຄວບຄຸມນ້ຳໃຕ້ດິນ (T5-9)", input_type: "T5-9", 
            column: {
              columnHead: [
                { id:1, title:"ລຳດັບ", inputType:"No" },
                { id:2, title:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
                { id:3, title:"ສັນຍາລັກ", inputType:"text-area" },
                { id:4, title:"ມາດຕະຖານຄວບຄຸມ", inputType:"text-area" },
                { id:5, title:"ຫົວໜ່ວຍ", inputType:"text-area" },
                { id:6, title:"ວິທີການກວດກາວັດແທກ", inputType:"text-area" },
              ],
            } , main_key : "542"
           },
          { classified: "title", code: "543", description: "ການຕິດຕາມກວດກາແບບຕໍ່ເນື່ອງ (Continuous Emission Monitoring System/CEMs)", input_type: "choice",options: haveOrNoOptions },

        ],
        form550: [
          { classified: "heading", code: "550", description: "ລະບົບບຳບັດນ້ຳເປື້ອນ", input_type: null },
          { classified: "sub_head", code: "550A", description: "ໃບອະນຸຍາດກໍ່ສ້າງລະບົບບຳບັດ", input_type: "text", main_key : "550" },

          { classified: "sub_head", code: "550B", description: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນ", input_type: null },
          { classified: "sub_head", code: "550B1", description: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນຕົ້ນ", input_type: "multi-choice",options: firstStepTreatment, main_key : "550B" },
          { classified: "sub_head", code: "550B2", description: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນທີ່ສອງ", input_type: "multi-choice",options: secondStepTreatment, main_key : "550B" },
          { classified: "sub_head", code: "550B3", description: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນທີ່ສາມ", input_type: "multi-choice",options: thirdStepTreatment, main_key : "550B" },
          { classified: "sub_head", code: "550B4", description: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນສຸດທ້າຍ", input_type: "multi-choice",options: lastStepTreatment, main_key : "550B" },

          { classified: "sub_head", code: "550C", description: "ຂັ້ນຕອນລະອຽດການບຳບັດ (T5-10)", input_type: "T5-10", 
            column: {
              columnHead: [
                { id:1, title:"ລະບົບບຳບັດເລກທີ", inputType:"text-area" },
                { id:2, title:"ຊະນິດລະບົບບຳບັດ", inputType:"text-area" },
                { id:3, title:"ຮູບແບບການເຮັດວຽກ", inputType:"text-area" },
                { id:4, title:"ຄວາມສາມາດຂອງລະບົບ", inputType:"text-area" },
                { id:5, title:"ປະລິມານໄຟຟ້າທີ່ໃຊ້", inputType:"text-area" },
              ],
            } , main_key : "550"
           },
          { classified: "sub_head", code: "550D", description: "ຮູບແບບການເຮັດວຽກຂອງລະບົບບຳບັດ", input_type: "choice", main_key : "550"},
          { classified: "sub_head", code: "550E", description: "ຄວາມສາມາດຂອງລະບົບບຳບັດນ້ຳ", input_type: "text", main_key : "550"},
          { classified: "sub_head", code: "550F", description: "ການໃຊ້ສານເຄມີໃນລະບົບ (T5-11)", input_type: "T5-11", 
            column: {
              columnHead: [
                { id:1, title:"ລຳດັບ", inputType:"No" },
                { id:2, title:"ຊື່ສານເຄມີ", inputType:"text-area" },
                { id:3, title:"ປະລິມານການໃຊ້", inputType:"text-area" },
                { id:4, title:"ຄວາມຖີ່ການນຳໃຊ້", inputType:"text-area" },
                { id:5, title:"ຈຸດປະສົງທີ່ນຳໃຊ້", inputType:"text-area" },
              ],
            } , main_key : "550"
           },
          { classified: "sub_head", code: "550G", description: "ໝໍ້ວັດປະລິມານການນຳໃຊ້ໄຟຟ້າ", input_type: "choice", main_key : "550" },
          { classified: "sub_head", code: "550H", description: "ປະລິມານໄຟຟ້າທີ່ໃຊ້ຕໍ່ເດືອນ", input_type: "text", main_key : "550" },
          { classified: "sub_head", code: "550I", description: "ແຜນວາດຂັ້ນຕອນການບຳບັດ (Diagram) (P5-3)", input_type: "file-P", main_key : "550" },
          { classified: "sub_head", code: "550J", description: "ແຜນຜັງລະບົບບຳບັດ (P5-4)", input_type: "file-P", main_key : "550" },
          { classified: "sub_head", code: "550K", description: "ຮູບພາບລະບົບບຳບັດ (P5-5)", input_type: "file-P", main_key : "550" },
        ],
        form560: [
          { classified: "heading", code: "560", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
          { classified: "sub_head", code: "560A", description: "ໃບອະນຸຍາດປ່ອຍສານມົນລະພິດ (ນ້ຳເປື້ອນ) (D5-1)47", input_type: "file-D", main_key : "560" },
          { classified: "sub_head", code: "560B", description: "ຜົນການວັດແທກນ້ຳໜ້າດິນ (D5-2)", input_type: "file-D", main_key : "560" },
          { classified: "sub_head", code: "560C", description: "ຜົນການວັດແທກນ້ຳໃຕ້ດິນ (D5-3)", input_type: "file-D", main_key : "560" },
          { classified: "sub_head", code: "560D", description: "ໃບອະນຸຍາດກໍ່ສ້າງລະບົບບຳບັດ (D5-4)", input_type: "file-D", main_key : "560" },
          { classified: "sub_head", code: "560E", description: "ຜົນການວັດແທກປະສິດທິພາບຂອງລະບົບບຳບັດ (ນ້ຳເຂົ້າ-ນ້ຳອອກ) (D5-5)", input_type: "file-D", main_key : "560" },
        
        ]
      }
//************************************************** 600 ******************************************************************** */

      export const form600:any = {
        form610: [
            { classified: "heading", code: "610", description: "ມົນລະພິດຈາກປ່ອງລະບາຍອາກາດ", input_type: null },
            { classified: "sub_head", code: "610A", description: "ໃບອະນຸຍາດປ່ອຍສານມົນລະພິດ (ອາກາດ) ເລກທີ", input_type: "text" },
            { classified: "sub_head", code: "610B", description: "ຈຳນວນປ່ອງລະບາຍອາກາດ", input_type: "number" },
            { classified: "sub_head", code: "610C", description: "ປະລິມານການປ່ອຍລວມ (m3/ຊົ່ວໂມງ)", input_type: "number" },
            { classified: "sub_head", code: "610D", description: "ແຫຼ່ງທີ່ມາຂອງມົນລະພິດຈາກປ່ອງລະບາຍອາກາດ (T6-1)", input_type: "T6-1", 
              column: {
                columnHead: [
                  { id:1, title:"ລຳດັບ", inputType:"No" },
                  { id:2, title:"ຂະບວນການ/ກິດຈະກຳ", inputType:"text-area" },
                  { id:3, title:"ເຊື້ອໄຟທີ່ໃຊ້", inputType:"multi-choice" },
                  { id:4, title:"ຮູບແບບການລະບາຍອາກາດ", inputType:"choice" },
                  { id:5, title:"ປ່ອງປ່ອຍ ອາກາດເລກທີ", inputType:"text-area" },
                  { id:6, title:"ມາດຕະການຄຸ້ມຄອງ", inputType:"multi-choice" },
                  { id:7, title:"ວັດຖຸດິບ ຫຼື ສານເຄມີທີ່ໃຊ້ໃນຂະບວນການ", inputType:"text-area" },
                  { id:8, title:"ມົນລະພິດທີ່ເກີດຂື້ນ", inputType:"text-area" },
                ],
                options:[
                  { forID:3, options: fuelUsedOptions},
                  { forID:4, options: ventilationPatternOptions},
                  { forID:6, options: protectionStandardsOptions},
                ]
              }   },
            { classified: "sub_head", code: "610E", description: "ແຜນວາດການເກີດມົນລະພິດທາງອາກາດໃນຂະບວນການ (P6-1)", input_type: "file-P" },
            { classified: "sub_head", code: "610F", description: "ຂໍ້ມູນປ່ອງລະບາຍອາກາດ (T6-2)", input_type: "T6-2", 
              column: {
                columnHead: [
                  { id:1, title:"ປ່ອງປ່ອຍ ອາກາດເລກທີ", inputType:"text-area" },
                  { id:2, title:"ຊື່ປ່ອງ ລະບາຍອາກາດ", inputType:"text-area" },
                  { id:3, title:"ພິກັດ GPS", inputType:"text-area" },
                  { id:4, title:"ລັກສະນະປ່ອງ (Shape)", inputType:"multi-choice" },
                  { id:5, title:"ພື້ນທີ່ໜ້າຕັດ (m2)", inputType:"text-area" },
                  { id:6, title:"ຄວາມສູງ (m)", inputType:"text-area" },
                  { id:7, title:"ຄວາມຖີ່ ໃນການປ່ອຍ", inputType:"text-area" },
                  { id:8, title:"ຂະບວນການ/ກິດຈະກຳ", inputType:"text-area" },
                  { id:9, title:"ການກວດກາ ວັດແທກ", inputType:"choice" },
                  { id:10, title:"ໝາຍເຫດ", inputType:"text-area" },
                ],
                options:[
                  { forID:9, options: haveOrNoOptions},
                ]
              }    },
            { classified: "sub_head", code: "610G", description: "ແຜນຜັງຕິດຕັ້ງພັດລົມ ແລະ ລະບົບລະບາຍອາກາດ (P6-2)", input_type: "P6-2" },
          ],
          form620: [
            { classified: "heading", code: "620", description: "ມົນລະພິດໃນສະຖານທີ່ເຮັດວຽກ", input_type: null },
            { classified: "sub_head", code: "620A", description: "ຈຳນວນແຫຼ່ງມົນລະພິດໃນສະຖານທີ່ເຮັດວຽກ", input_type: "number" },
            { classified: "sub_head", code: "620B", description: "ແຫຼ່ງທີ່ມາຂອງມົນລະພິດໃນສະຖານທີ່ເຮັດວຽກ (T6-3)", input_type: "T6-3", 
              column: {
                columnHead: [
                  { id:1, title:"ລຳດັບ", inputType:"No" },
                  { id:2, title:"ສະຖານທີ່/ຂະບວນການທີ່ເຮັດໃຫ້ເກີດມົນລະພິດ", inputType:"text-area" },
                  { id:3, title:"ວັດຖຸດິບ ຫຼື ສານເຄມີທີ່ໃຊ້ໃນຂະບວນການ", inputType:"text-area" },
                  { id:4, title:"ປະເພດມົນລະພິດທີ່ເກີດຂື້ນ", inputType:"text-area" },
                  { id:5, title:"ມາດຕະຖານຄຸ້ມຄອງ", inputType:"text-area" },
                  { id:6, title:"ການກວດກາວັດແທກ", inputType:"choice" },
                  { id:7, title:"ໝາຍເຫດ", inputType:"text-area" },
                ],
                options:[
                  { forID:6, options: haveOrNoOptions},
                ]
              }    },
            { classified: "sub_head", code: "620C", description: "ແຜນວາດການເກີດມົນລະພິດທາງອາກາດໃນຂະບວນການ (P6-3)", input_type: "file-P" },
          ],
          form630: [
            { classified: "heading", code: "630", description: "ຄຸນນະພາບອາກາດໃນບັນຍາກາດ ກ່ອນດຳເນີນກິດຈະການ", input_type: null },
            { classified: "sub_head", code: "630A", description: "ຈຳນວນຈຸດເກັບຕົວຢ່າງຄຸນນະພາບອາກາດ ກ່ອນດຳເນີນກິດຈະການ", input_type: "number" },
            { classified: "sub_head", code: "630B", description: "ຂໍ້ມູນຈຸດກວດກາວັດແທກຄຸນນະພາບອາກາດ ກ່ອນດຳເນີນກິດຈະການ (T6-4)", input_type: "T6-4", 
              column: {
                columnHead: [
                  { id:1, title:"ລຳດັບ", inputType:"No" },
                  { id:2, title:"ຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                  { id:3, title:"ລາຍລະອຽດຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                  { id:4, title:"ພິກັດ GPS", inputType:"text-area" },
                ],
              }  },
          ],
          form640: [
            { classified: "heading", code: "640", description: "ການຕິດຕາມກວດກາຄຸນນະພາບອາກາດ", input_type: null },
            { classified: "title", code: "641", description: "ການຕິດຕາມກວດກາອາກາດໃນບັນຍາກາດອ້ອມຂ້າງ", input_type: null },
            { classified: "sub_head", code: "641A", description: "ຈຳນວນຈຸດຕິດຕາມກວດກາ", input_type: "number" },
            { classified: "sub_head", code: "641B", description: "ຂໍ້ມູນຈຸດຕິດຕາມກວດກາອາກາດໃນບັນຍາກາດອ້ອມຂ້າງ (T6-5)", input_type: "T6-5", 
              column: {
                columnHead: [
                  { id:1, title:"ຈຸດກວດກາເລກທີ", inputType:"text-area" },
                  { id:2, title:"ລາຍລະອຽດຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                  { id:3, title:"ຄວາມຖີ່ໃນການກວດກາ", inputType:"text-area" },
                  { id:4, title:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
                ],
              }  },
            { classified: "sub_head", code: "641C", description: "ມາດຕະຖານຄວບຄຸມອາກາດໃນບັນຍາກາດອ້ອມຂ້າງ (T6-6)", input_type: "T6-6", 
              column: {
                columnHead: [
                  { id:1, title:"ລຳດັບ", inputType:"No" },
                  { id:2, title:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
                  { id:3, title:"ສັນຍາລັກ", inputType:"text-area" },
                  { id:4, title:"ມາດຕະຖານຄວບຄຸມ", inputType:"text-area" },
                  { id:5, title:"ຫົວໜ່ວຍ", inputType:"text-area" },
                  { id:6, title:"ວິທີການກວດກາວັດແທກ", inputType:"text-area" },
                  { id:7, title:"ແຫຼ່ງທີ່ມາຂອງມາດຕະຖານ", inputType:"text-area" },
                ],
              }     },
            
            { classified: "title", code: "642", description: "ການຕິດຕາມກວດກາອາກາດຈາກປ່ອງອາກາດ", input_type: null },
            { classified: "sub_head", code: "642A", description: "ຈຳນວນຈຸດຕິດຕາມກວດກາ", input_type: "number" },
            { classified: "sub_head", code: "642B", description: "ຂໍ້ມູນຈຸດຕິດຕາມກວດກາອາກາດຈາກປ່ອງລະບາຍອາກາດ (T6-7)", input_type: "T6-7", 
              column: {
                columnHead: [
                  { id:1, title:"ຈຸດກວດກາເລກທີ", inputType:"text-area" },
                  { id:2, title:"ປ່ອງລະບາຍອາກາດເລກທີ", inputType:"text-area" },
                  { id:3, title:"ຄວາມຖີ່ໃນການກວດກາ", inputType:"text-area" },
                  { id:4, title:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
                ],
              }    },
            { classified: "sub_head", code: "642C", description: "ມາດຕະຖານຄວບຄຸມອາກາດຈາກປ່ອງລະບາຍອາກາດ (T6-8)", input_type: "T6-8" },
            
            { classified: "title", code: "643", description: "ການຕິດຕາມກວດກາອາກາດໃນສະຖານທີ່ເຮັດວຽກ", input_type: null },
            { classified: "sub_head", code: "643A", description: "ຈຳນວນຈຸດຕິດຕາມກວດກາ", input_type: "number" },
            { classified: "sub_head", code: "643B", description: "ຂໍ້ມູນຈຸດຕິດຕາມກວດກາອາກາດໃນສະຖານທີ່ເຮັດວຽກ (T6-9)", input_type: "T6-9" },
            { classified: "sub_head", code: "643C", description: "ມາດຕະຖານຄວບຄຸມອາກາດໃນສະຖານທີ່ເຮັດວຽກ (T6-10)", input_type: "T6-10" },

            { classified: "sub_head", code: "644", description: "ການຕິດຕາມກວດກາແບບຕໍ່ເນື່ອງ", input_type: "choice", options: haveOrNoOptions },
  
          ],
          form650: [
            { classified: "heading", code: "650", description: "ລະບົບບຳບັດອາກາດ", input_type: null },
            { classified: "sub_head", code: "650A", description: "ໃບອະນຸຍາດກໍ່ສ້າງລະບົບບຳບັດ ເລກທີ", input_type: "text" },
            { classified: "sub_head", code: "650B", description: "ຈຳນວນລະບົບບຳບັດ", input_type: "number" },
            { classified: "sub_head", code: "650C", description: "ຂໍ້ມູນລະບົບບຳບັດ (T6-11)", input_type: "T6-11" },
            { classified: "sub_head", code: "650D", description: "ຂັ້ນຕອນການບຳບັດ (T6-12)", input_type: "T6-12" },
            { classified: "sub_head", code: "650E", description: "ການໃຊ້ສານເຄມີໃນລະບົບ (T6-13)", input_type: "T6-13" },
            { classified: "sub_head", code: "650F", description: "ໝໍ້ວັດປະລິມານການນຳໃຊ້ໄຟຟ້າ", input_type: "choice", options: haveOrNoOptions },
            { classified: "sub_head", code: "650G", description: "ແຜນວາດຂັ້ນຕອນການບຳບັດ (Diagram) (P6-4)", input_type: "file-P" },
            { classified: "sub_head", code: "650H", description: "ແຜນຜັງລະບົບບຳບັດ (P6-5)", input_type: "file-P" },
            { classified: "sub_head", code: "650I", description: "ຮູບພາບລະບົບບຳບັດ (P6-6)", input_type: "file-P" },
  
          ],
          form660: [
            { classified: "heading", code: "660", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
            { classified: "sub_head", code: "660A", description: "ໃບອະນຸຍາດປ່ອຍສານມົນລະພິດ (ອາກາດ) (D6-1)", input_type: "file-D" },
            { classified: "sub_head", code: "660B", description: "ຜົນການກວດກາວັດແທກອາກາດໃນບັນຍາກາດກ່ອນດຳເນິນກິດຈະການ (D6-2)", input_type: "file-D" },
            { classified: "sub_head", code: "660C", description: "ໃບອະນຸຍາດກໍ່ສ້າງລະບົບບຳບັດ (D6-3)", input_type: "file-D" },
            { classified: "sub_head", code: "660D", description: "ຜົນການວັດແທກປະສິດທິພາບຂອງລະບົບບຳບັດ (D6-4)", input_type: "file-D" }
          ]
        }