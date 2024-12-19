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
    { value: "large_scale_industry", label: "ໃຫຍ່" },
    { value: "Medium_scale_industry", label: "ກາງ" },
    { value: "small_scale_industry", label: "ນ້ອຍ" },
  ];
  const positionOptions = [
    { value: "Workers_representation", label: "ຕ່າງໜ້າຜູ້ອອກແຮງງານ" },
    { value: "Nurse_Aid_Room", label: "ແພດປະຈຳໂຮງງານ" },
    { value: "first_aider", label: "ຜູ້ຮັບຜິດຊອບປະຖົມພະຍາບານ" },
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

  const yesNoNotApplicableOptions = [
    { value: "Yes", label: "ມີ" },
    { value: "No", label: "ບໍ່ມີ" },
    { value: "Not_applicable", label: "ບໍ່ກ່ຽວຂ້ອງ" },
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
      { classified: "heading", code: "110",  descriptionEN: "Enterprise_information", descriptionLA: "ຂໍ້ມູນວິສາຫະກິດ", input_type: null },
      { classified: "title", code: "110A",  descriptionEN: "Enterprise_name", descriptionLA: "ຊື່ບໍລິສັດ", input_type: null },
      { classified: "sub_head", code: "110A1",  descriptionEN: "Lao_name", descriptionLA: "ຊື່ລາວ", input_type: "text", main_key : "110A" },
      { classified: "sub_head", code: "110A2",  descriptionEN: "English_name", descriptionLA: "ຊື່ອັງກິດ", input_type: "text", main_key : "110A" },
      { classified: "title", code: "110B",  descriptionEN: "Director_name", descriptionLA: "ຜູ້ອຳນວຍການ", input_type: "text" },
      { classified: "title", code: "110C",  descriptionEN: "Business_Objectives", descriptionLA: "ປະກອບກິດຈະການ", input_type: "text" },
      { classified: "title", code: "110D",  descriptionEN: "Registered_Capital", descriptionLA: "ທຶນຈົດທະບຽນ", input_type: null, tooltip:"ອິງຕາມມາດຕາ 8 ຂໍ້ຕົກລົງ ວ່າດ້ວຍການຄຸ້ມຄອງໂຮງງານ ເລກທີ 0264/ອຄ. ກອຫ, ລົງວັນທີ 15 ມີນາ 2019\n- ໂຮງງານຂະໜາດນ້ອຍ: ມູນຄ່າການລົງທຶນທັງໝົດຕັ້ງແຕ່ 100 ລ້ານກີບ ຫາ 1 ຕື້ກີບ\n- ໂຮງງານຂະໜາດກາງ: ມູນຄ່າການລົງທຶນທັງໝົດຫຼາຍກວ່າ ຕັ້ງແຕ່ 1 ຕື້ກີບ ຫາ 4 ຕື້ກີບ\n- ໂຮງງານຂະໜາດໃຫຍ່: ມູນຄ່າການລົງທຶນທັງໝົດຫຼາຍກວ່າ 4 ຕື້ກີບຂື້ນໄປ" },
      { classified: "sub_head", code: "110D1",  descriptionEN: "LAK", descriptionLA: "ກີບ", input_type: "number", main_key : "110D" },
      { classified: "sub_head", code: "110D2",  descriptionEN: "USD", descriptionLA: "ໂດລາ", input_type: "number", main_key : "110D" },
      { classified: "title", code: "110E",  descriptionEN: "Term_of_Investment_Year", descriptionLA: "ກຳນົດອາຍຸການລົງທຶນ (ປີ)", input_type: "number" },
      { classified: "title", code: "110F",  descriptionEN: "Office_location", descriptionLA: "ທີ່ຕັ້ງສຳນັກງານ", input_type: null },
      { classified: "sub_head", code: "110F1",  descriptionEN: "Village", descriptionLA: "ບ້ານ", input_type: "choice", options: villageOptions, main_key : "110F" },
      { classified: "sub_head", code: "110F2",  descriptionEN: "District", descriptionLA: "ເມືອງ", input_type: "choice", options: districtOptions, main_key : "110F" },
      { classified: "sub_head", code: "110F3",  descriptionEN: "Province", descriptionLA: "ແຂວງ", input_type: "choice", options: provinceOptions, main_key : "110F" },
      { classified: "sub_head", code: "110F4",  descriptionEN: "Special_Economic_Zones_SEZs", descriptionLA: "ເຂດເສດຖະກິດພິເສດ", input_type: "choice", options: specialAreaOptions, main_key : "110F" },
      { classified: "title", code: "110G",  descriptionEN: "organization_chart", descriptionLA: "ໂຄງຮ່າງການຈັດຕັ້ງ", input_type: "file-P" },
      { classified: "title", code: "110H",  descriptionEN: "Enterprise_Registration_No", descriptionLA: "ເລກປະຈຳຕົວວິສາຫະກິດ", input_type: "number" },
      { classified: "title", code: "110I",  descriptionEN: "EMC_ID", descriptionLA: "ເລກປະຈຳຕົວຜູ້ຄອບຄອງສິ່ງເສດເຫຼືອ ແລະ ສ້າງມົນລະພິດ (EMC ID)", input_type: "text", tooltip:"EMC ຫຍໍ້ມາຈາກ Environmental management and pollution control" },
      { classified: "title", code: "110J",  descriptionEN: "Lao_Standard_Industry_Classification_LSIC", descriptionLA: "ຂະແໜງທຸລະກິດ (LSIC)", input_type: "multi-choice", options: businessSectorOptions, tooltip:"LSIC ຫຍໍ້ມາຈາກ Lao Standard Industry Classification"},
      { classified: "title", code: "110K",  descriptionEN: "Industry_scale", descriptionLA: "ຂະໜາດໂຮງງານ", input_type: "choice", options: sizeOptions },
      { classified: "title", code: "110L",  descriptionEN: "Environmental_Impact_Risk_level", descriptionLA: "ລະດັບຄວາມສ່ຽງຜົນກະທົບດ້ານສິ່ງແວດລ້ອມຂອງໂຮງງານ", input_type: "choice", options: riskOptions, tooltio:"ອິງຕາມຂໍ້ຕົກລົງ ວ່າດ້ວຍການຈັດລະດັບຄວາມສ່ຽງຜົນກະທົບດ້ານສິ່ງແວດລ້ອມຂອງໂຮງງານອຸດສາຫະກຳ ເລກທີ 0948/ອຄ, ລົງວັນທີ 12 ຕຸລາ 2021"  },
      { classified: "title", code: "110M",  descriptionEN: "EIA_Report_ESIA_Report", descriptionLA: "ບົດລາຍງານການປະເມີນຜົນກະທົບສິ່ງແວດລ້ອມ ແລະ ສັງຄົມ (EIS, ESIA)", input_type: "choice", options: yesNoNotApplicableOptions  },
      { classified: "title", code: "110N",  descriptionEN: "Initial_Environmental_Examination_Report", descriptionLA: "ບົດລາຍງານການສຶກສາເບື້ອງຕົ້ນ ກ່ຽວກັັບຜົນກະທົບຕໍ່ສິ່ງແວດລ້ອມ (IEE)", input_type: "choice", options: yesNoNotApplicableOptions  },
      { classified: "title", code: "110O",  descriptionEN: "Environmental_Monitoring_and_Management_Plan_EMMP", descriptionLA: "ແຜນຄຸ້ມຄອງ ແລະ ຕິດຕາມກວດກາສິ່ງແວດລ້ອມ (EMMP)", input_type: "choice", options: yesNoNotApplicableOptions  },
    ],
    form120: [
      { classified: "heading", code: "120",  descriptionEN: "Sefety_and_Environmental_Management_Unit", descriptionLA: "ຫົວໜ່ວຍຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ", input_type: null, tooltip:"ຂໍ້ຕົກລົງວ່າດ້ວຍໜ່ວຍງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ເລກທີ 1932/ອຄ, 07 ຕຸລາ 2024\n- ໂຮງງານທີ່ມີຄວາມສ່ຽງດ້ານສິ່ງແວດລ້ອມລະດັບສູງ ແລະ ກາງ ຕ້ອງສ້າງຕັ້ງໜ່ວຍງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ (ມາດຕາ 5)\n- ສຳລັບໂຮງງານອຸດສາຫະກຳທີ່ມີຄວາມສ່ຽງດ້ານສິ່ງແວດລ້ອມຕ່ຳ ບໍ່ຈຳເປັນຕ້ອງສ້າງໜ່ວຍງານສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ ປະຈຳໂຮງງານ ແຕ່ຕ້ອງມີພະນັກງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ ຢ່າງໜ້ອຍ 1 ຄົນ (ມາດຕາ 5)\n- ໜ່ວຍງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ ຕ້ອງມີຄະນະອຳນວຍການຂອງໂຮງງານອຸດສາຫະກຳປຸງແຕ່ງເປັນຫົວໜ້າໜ່ວຍງານ (ມາດຕາ 6)\n- ໜ່ວຍງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ ຕ້ອງມີພະນັກງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ ປະຈຳໂຮງງານຢ່າງໜ້ອຍ 2 ຄົນ ຂື້ນໄປ, ຊື່ງໃນນັ້ນຕ້ອງມີ 1 ຄົນຂື້ນໄປ ທີ່ໄດ້ຜ່ານການຝຶກອົບຮົມ ແລະ ໄດ້ຮັບການຢັ້້ງຢືນເປັນຜູ້ຮັບຜິດຊອບຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ຈາກກົມອຸດສາຫະກຳ, ກະຊວງອຸດສາຫະກຳ ແລະ ການຄ້າ (ມາດຕາ 6)" },
      { classified: "title", code: "120A",  descriptionEN: "Head_of_Unit", descriptionLA: "ຫົວໜ້າໜ່ວຍງານ", input_type: "multi-text", 
        column: {
          columnHead: [
            { id:1, code:"120A1", descriptionEN:"Name", descriptionLA:"ຊື່ ແລະ ນາມສະກຸນ", inputType:"text-area" },
          ]
        },main_key : "120" 
      },
      { classified: "title", code: "120B",  descriptionEN: "A_health_safety_and_environment_HSE_officer", descriptionLA: "ຜູ້ຮັບຜິດຊອບຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ", input_type: "multi-text", tooltip:"ຂໍ້ຕົກລົງວ່າດ້ວຍໜ່ວຍງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ເລກທີ 1932/ອຄ, 07 ຕຸລາ 2024\nຜູ້ຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ໝາຍເຖິງ ບຸກຄະລາກອນໄດ້ຮັບການແຕ່ງຕັ້ງ ໂດຍຜູ້ດຳເນີນກິດຈະການໂຮງງານ ແລະ ຜ່ານການຝຶກອົບຮົມເປັນຜູ້ຮັບຜິດຊອບຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ຈາກກົມອຸດສາຫະກຳ, ກະຊວງອຸດສາຫະກຳ ແລະ ການຄ້າ. (ມາດຕາ 3)",
        column:{
          columnHead:[
            { id:1, code:"120B1", descriptionEN:"Name", descriptionLA:"ຊື່ ແລະ ນາມສະກຸນ", inputType:"text-area" },
            { id:2, code:"120B2", descriptionEN:"HSE_Officer_certificate", descriptionLA:"ໃບຢັ້ງຢືນເປັນຜູ້ຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ", inputType:"choice", tooltip:"ຂໍ້ຕົກລົງວ່າດ້ວຍໜ່ວຍງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ເລກທີ 1932/ອຄ, 07 ຕຸລາ 2024\nໃບຢັ້ງຢືນເປັນຜູ້ຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ແມ່ນໜັງສືຢັ້ງຢືນການຮັບຮອງ ຜູ້ທີ່ສຳເລັດການຝຶກອົບຮົມຜູ້ຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ອອກໃຫ້ໂດຍກົມອຸດສາຫະກຳ (ມາດຕາ 3)" },
            { id:3, code:"120B3", descriptionEN:"Date_of_Expiry", descriptionLA:"ວັນໝົດອາຍຸຂອງໃບຢັ້ງຢືນ (ຖ້າມີ)", inputType:"date", tooltip:"ອິງຕາມ ມາດຕາ 11 ຂໍ້ຕົກລົງວ່າດ້ວຍໜ່ວຍງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ເລກທີ 1932/ອຄ, 07 ຕຸລາ 2024\nໃບຢັ້ງຢືນເປັນຜູ້ຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ມີອາຍຸນຳໃຊ້ 5 ປີ, ພາຍຫຼັງໝົດອາຍຸນຳໃຊ້ ຈະໄດ້ລົງທະບຽນ, ຝຶກອົບຮົມ ແລະ ສອບເສັງຄືນໃໝ່" }
          ]   , options:[ 
            {forID:2, options: haveOrNoOptions}
          ]
         }, main_key : "120"
      },
      { classified: "title", code: "120C",  descriptionEN: "A_health_safety_and_environment_HSE_officer", descriptionLA: "ພະນັກງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ", input_type: "multi-text",tooltip:"ຂໍ້ຕົກລົງວ່າດ້ວຍໜ່ວຍງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ເລກທີ 1932/ອຄ, 07 ຕຸລາ 2024\n- ພະນັກງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ ໝາຍເຖິງບຸກຄະລາກອນທີ່ຮັບຜິດຊອບວຽກງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ ປະຈຳໂຮງງານ ແລະ ໄດ້ຮັບການແຕ່ງຕັ່ງໂດຍຜູ້ດຳເນີນກິດຈະການໂຮງງານ (ມາດຕາ 3)",
         column:{
          columnHead:[
            {id:1, code:"120C1", descriptionEN:"Name", descriptionLA:"ຊື່ ແລະ ນາມສະກຸນ", inputType:"text-area"},
            {id:2, code:"120C2", descriptionEN:"HSE_Officer_certificate", descriptionLA:"ໃບຢັ້ງຢືນເປັນຜູ້ຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ", inputType:"choice", tooltip:"ຂໍ້ຕົກລົງວ່າດ້ວຍໜ່ວຍງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ເລກທີ 1932/ອຄ, 07 ຕຸລາ 2024\nໃບຢັ້ງຢືນເປັນຜູ້ຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ແມ່ນໜັງສືຢັ້ງຢືນການຮັບຮອງ ຜູ້ທີ່ສຳເລັດການຝຶກອົບຮົມຜູ້ຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ອອກໃຫ້ໂດຍກົມອຸດສາຫະກຳ (ມາດຕາ 3)" },
            {id:3, code:"120C3", descriptionEN:"Date_of_Expiry", descriptionLA:"ວັນໝົດອາຍຸຂອງໃບຢັ້ງຢືນ (ຖ້າມີ)", inputType:"date", tooltip:"ອິງຕາມ ມາດຕາ 11 ຂໍ້ຕົກລົງວ່າດ້ວຍໜ່ວຍງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ເລກທີ 1932/ອຄ, 07 ຕຸລາ 2024\nໃບຢັ້ງຢືນເປັນຜູ້ຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ມີອາຍຸນຳໃຊ້ 5 ປີ, ພາຍຫຼັງໝົດອາຍຸນຳໃຊ້ ຈະໄດ້ລົງທະບຽນ, ຝຶກອົບຮົມ ແລະ ສອບເສັງຄືນໃໝ່" }
          ], 
          options:[
            { forID:2, options: haveOrNoOptions}
          ]
        },main_key : "120" 
      },
      { classified: "heading", code: "120D",  descriptionEN: "A_health_safety_and_environment_HSE_officer", descriptionLA: "ພະນັກງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ", input_type: "multi-text",tooltip:"ຂໍ້ຕົກລົງວ່າດ້ວຍໜ່ວຍງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ ເລກທີ 1932/ອຄ, 07 ຕຸລາ 2024\n- ພະນັກງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ ໝາຍເຖິງບຸກຄະລາກອນທີ່ຮັບຜິດຊອບວຽກງານຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ ປະຈຳໂຮງງານ ແລະ ໄດ້ຮັບການແຕ່ງຕັ່ງໂດຍຜູ້ດຳເນີນກິດຈະການໂຮງງານ (ມາດຕາ 3)",
         column:{
          columnHead:[
            {id:1, code:"120D1", descriptionEN:"Enterprise_name", descriptionLA:"ຊື່ບໍລິສັດ", inputType:"text-area"},
            {id:2, code:"120D2", descriptionEN:"License_to_Provide_Environmental_Services_No", descriptionLA:"ເລກທີໃບອະນຸຍາດໃຫ້ບໍລິການວິຊາການດ້ານສິ່ງແວດລ້ອມ", inputType:"text-area", tooltip:"ອິງຕາມ ຂໍ້ຕົກລົງ ວ່າດ້ວຍລະບຽບການດຳເນີນບໍລິການວິຊາການກ່ຽວກັບສິ່ງແວດລ້ອມ ເລກທີ 0345/ກຊສ, 22 ມັງກອນ 2015" },
          ], 
        },main_key : "120" 
      },
    ],
    form130: [
      { classified: "heading", code: "130",  descriptionEN: "Occupational_safety_and_health_Unit", descriptionLA: "ຫົວໜ່ວຍຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: null },
      { classified: "title", code: "130A",  descriptionEN: "A_health_safety_and_environment_HSE_officer", descriptionLA: "ພະນັກງານຮັບຜິດຊອບດ້ານຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: null, 
        column:{
          columnHead:[
            {id:1, code:"130A1", descriptionEN:"Name", descriptionLA:" ຊື່່  ແລະ ນາມສະກຸນ", inputType:"text-area"}
          ]
        }, 
        main_key : "130" 
      },
      { classified: "title", code: "130B",  descriptionEN: "Safety_and_Health_Committee", descriptionLA: "ໜ່ວຍງານຮັບຜິດຊອບ ຫຼື ຄະນະກຳມະການດ້ານຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: null },
      { classified: "sub_head", code: "130B1",  descriptionEN: "Safety_and_Health_Committee_List", descriptionLA: "ລາຍຊື່ພາຍໃນຫົວໜ່ວຍຄວາມປອດໄພ", input_type: "T1-1", 
        column:{
          columnHead:[
            {id:1, descriptionEN:"name", descriptionLA:"ຊື່ ແລະ ນາມສະກຸນ", inputType:"text-area"},
            {id:2, descriptionEN:"position", descriptionLA:"ພາກສ່ວນ", inputType:"choice" }
          ], 
          options:[
            { forID:2, options: positionOptions}
          ]
        },
        main_key : "130" 
      },
      { classified: "sub_head", code: "130B2",  descriptionEN: "Occupational_safety_and_health_Committee_Chart", descriptionLA: "ໂຄງຮ່າງການຈັດຕັ້ງໜ່ວຍງານຮັບຜິດຊອບຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: "file-P", main_key : "130" },
    ],
    form140: [
      { classified: "heading", code: "140",  descriptionEN: "Related_documents", descriptionLA: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
      { classified: "sub_head", code: "140A",  descriptionEN: "Enterprise_Registration_Certificate", descriptionLA: "ໃບທະບຽນວິສາຫະກິດ (D1-1)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140B",  descriptionEN: "Investment_License", descriptionLA: "ໃບອະນຸຍາດລົງທຶນ (D1-2)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140C",  descriptionEN: "Operation_license", descriptionLA: "ໃບອະນຸຍາດດຳເນີນກິດຈະການ (D1-3)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140D",  descriptionEN: "Certificate_of_Tax_Registration_ID ", descriptionLA: "ໃບຢັ້ງຢືນການມອບເລກປະຈຳຕົວຜູ້ເສຍອາກອນ (D1-4)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140E",  descriptionEN: "Environmental_management_and_Pollution_control_ID", descriptionLA: "ໃບຢັ້ງຢືນເລກປະຈຳຕົວຜູ້ຄອບຄອງສິ່ງເສດເຫຼືອ ແລະ ສ້າງມົນລະພິດ (D1-5)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140F",  descriptionEN: "Operation_license_for_Chemical_business", descriptionLA: "ໃບອະນຸຍາດດຳເນີນທຸລະກິດກ່ຽວກັບເຄມີ (D1-6)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140G",  descriptionEN: "License_to_Provide_Environmental_Services", descriptionLA: "ໃບອະນຸຍາດໃຫ້ບໍລິການວິຊາການກ່ຽວກັບສິ່ງແວດລ້ອມ (D1-7)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140H",  descriptionEN: "HSE_officer_Certificate", descriptionLA: "ໃບຢັ້ງຢືນເປັນຜູ້ຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພປະຈຳໂຮງງານ (D1-8)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140I",  descriptionEN: "Environmental_Compliance_Certificate_ECC", descriptionLA: "ໃບຢັ້ງຢືນກ່ຽວກັບສິ່ງແວດລ້ອມທີ່ຮັບຮອງ EIA, ESIA, IEE, EMMP", input_type: "file-D-multi", main_key : "140" },
      { classified: "sub_head", code: "140J",  descriptionEN: "International_Standards_Certification", descriptionLA: "ໃບຢັ້ງຢືນລະບົບມາດຕະຖານສາກົນ", input_type: "file-D", main_key : "140" },
    ],
  };


export const form200:any = {
    form210: [
        { classified: "heading", code: "210", ENdescription: "Factory location",LAdescription: "ທີ່ຕັ້ງຂອງໂຮງງານ", input_type: null },
        { classified: "title", code: "210A", ENdescription: "Factory location",LAdescription: "ທີ່ຕັ້ງໂຮງງານ", input_type: null },
        { classified: "sub_head", code: "210A1", ENdescription: "street",LAdescription: "ຖະໜົນ", input_type: "text", main_key : "210A" },
        { classified: "sub_head", code: "210A2", ENdescription: "village",LAdescription: "ບ້ານ", input_type: "choice", options: provinceOptions, main_key : "210A" },
        { classified: "sub_head", code: "210A3", ENdescription: "District",LAdescription: "ເມືອງ", input_type: "choice", options: districtOptions, main_key : "210A" },
        { classified: "sub_head", code: "210A4", ENdescription: "Province",LAdescription: "ແຂວງ", input_type: "choice", options: villageOptions, main_key : "210A" },
        { classified: "sub_head", code: "210A5", ENdescription: "Special Economic Zones (SEZs)",LAdescription: "ເຂດເສດຖະກິດພິເສດ", input_type: "choice", options: specialAreaOptions, main_key : "210A" },
      
        { classified: "title", code: "210B", ENdescription: "Factory map",LAdescription: "ແຜນທີ່ໂຮງງານ", input_type: "file-P", main_key : "210" },
        { classified: "title", code: "210C", ENdescription: "GPS Coordinates (UTM)",LAdescription: "ຕຳແໜ່ງພິກັດ GPS (ລະບົບ UTM)", input_type: "text", main_key : "210" },
        { classified: "sub_head", code: "210C1", ENdescription: "Zone",LAdescription: "Zone", input_type: "text", main_key : "210C" },
        { classified: "sub_head", code: "210C2", ENdescription: "Easting: E",LAdescription: "ພິກັດ Easting: E", input_type: "text", main_key : "210C" },
        { classified: "sub_head", code: "210C3", ENdescription: "Northing: N",LAdescription: "ພິກັດ Northing: N", input_type: "text", main_key : "210C" },
      ],
      form220: [
        { classified: "heading", code: "220", ENdescription: "Area surrounding the factory",LAdescription: "ສະພາບພື້ນທີ່ອ້ອມຂ້າງໂຮງງານ", input_type: null, tooltip:"ເປັນສ່ວນໜື່ງຂອງເອກະສານປະກອບສະເໜີອອກໃບຢັ້ງຢືນດຳເນີນກິດຈະການໂຮງງານ (ມາດຕາ 14 ຂໍ້ຕົກລົງ ວ່າດ້ວຍການຄຸ້ມຄອງໂຮງງານ ເລກທີ 0264/ອຄ.ກອຫ, ວັນທີ 15 ມີນາ 2019)" },
        { classified: "title", code: "220A", ENdescription: "Adjacent area",LAdescription: "ພື້ນທີ່ຕິດກັບໂຮງງານ", input_type: null },
        { classified: "sub_head", code: "220A1", ENdescription: "North",LAdescription: "ທິດເໜືອ", input_type: "text", main_key : "220A" },
        { classified: "sub_head", code: "220A2", ENdescription: "South",LAdescription: "ທິດໃຕ້", input_type: "text", main_key : "220A" },
        { classified: "sub_head", code: "220A3", ENdescription: "east",LAdescription: "ທິດຕາເວັນອອກ", input_type: "text", main_key : "220A" },
        { classified: "sub_head", code: "220A4", ENdescription: "West",LAdescription: "ທິດຕາເວັນຕົກ", input_type: "text", main_key : "220A" },
  
        { classified: "title", code: "220B", ENdescription: "factory surrounding areas map (radius of 500 meters)",LAdescription: "ແຜນຜັງສະແດງໃຫ້ເຫັນທີ່ຕັ້ງໂຮງງານ ໃນຂອບເຂດລັດສະໝີ 500 ແມັດ", input_type: "file-P" },
        { classified: "title", code: "220C", ENdescription: "Surrounding area",LAdescription: "ພື້ນທີ່ອ້ອມຂ້າງໂຮງງານ ", input_type: null },
        { classified: "sub_head", code: "220C1", ENdescription: "community",LAdescription: "ຊຸມຊົນ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C2", ENdescription: "Water source",LAdescription: "ແຫຼ່ງນໍ້າ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C3", ENdescription: "School",LAdescription: "ໂຮງຮຽນ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C4", ENdescription: "hospital or health station",LAdescription: "ໂຮງໝໍ ຫຼື ສຸກສາລາ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C5", ENdescription: "temple",LAdescription: "ວັດວາອາຮາມ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C6", ENdescription: "Archaeological site",LAdescription: "ສະຖານທີ່ປະຫວັດສາດ ຫຼື ບູຮານວັດຖຸ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C7", ENdescription: "conservation area",LAdescription: "ເຂດອະນຸລັກຊີວະນານາພັນ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C8", ENdescription: "tourist attraction",LAdescription: "ແຫຼ່ງທ່ອງທ່ຽວ", input_type: "text", main_key : "220C" },
        { classified: "sub_head", code: "220C9", ENdescription: "Another (specify)",LAdescription: "ອື່ນໆ (ລະບຸ)", input_type: "text", main_key : "220C" },
      ],
      form230: [
        { classified: "heading", code: "230", ENdescription: "Area, buildings and structures within the factory",LAdescription: "ການນຳໃຊ້ພື້ນທີ່, ອາຄານ ແລະ ສິ່ງປຸກສ້າງພາຍໃນໂຮງງານ", input_type: null },
        { classified: "title", code: "231", ENdescription: "Area and Utilization",LAdescription: "ເນື້ອທີ່ ແລະ ການນຳໃຊ້ພື້ນທີ່", input_type: null },
        { classified: "sub_head", code: "231A", ENdescription: "Total Area (Square meter)",LAdescription: "ເນື້ອທີ່ທັງໝົດ (ຕາແມັດ)", input_type: "number", main_key : "231" },
        { classified: "sub_head", code: "231B", ENdescription: "green space (percent)",LAdescription: "ພື້ນທີ່ສີຂຽວ (ສ່ວນຮ້ອຍ)", input_type: "number", main_key : "231" },
        { classified: "sub_head", code: "231C", ENdescription: "Area Utilization detail",LAdescription: "ການນຳໃຊ້ພື້ນທີ່", input_type: "T2-1", 
          column:
          {
            columnHead:[
              {id:1, ENdescription: "No", LAdescription:"ລຳດັບ", inputType:"No"},
              {id:2, ENdescription: "Area_name", LAdescription:"ຊື່ພື້ນທີ່", inputType:"text-area" },
              {id:3, ENdescription: "Area_Square_meter", LAdescription:"ເນື້ອທີ່ (ຕາແມັດ)", inputType:"text-area" },
              {id:4, ENdescription: "Percent", LAdescription:"ສ່ວນຮ້ອຍ", inputType:"text-area" },
              {id:5, ENdescription: "Remarks", LAdescription:"ໝາຍເຫດ", inputType:"text-area" }
            ] 
          }, main_key : "231"
        },
        { classified: "sub_head", code: "231D", ENdescription: "Space Utilization Layout",LAdescription: "ແຜນຜັງການນຳໃຊ້ພື້ນທີ່", input_type: "file-P", main_key : "231" },
      
        { classified: "title", code: "232", ENdescription: "Buildings and structures",LAdescription: "ອາຄານ ແລະ ສິ່ງປຸກສ້າງ", input_type: null },
        { classified: "sub_head", code: "232A", ENdescription: "Number of Buildings and structures",LAdescription: "ຈຳນວນອາຄານ ແລະ ສິ່ງປຸກສ້າງ", input_type: "text", main_key : "232" },
        { classified: "sub_head", code: "232B", ENdescription: "Buildings and structures detail",LAdescription: "ຂໍ້ມູນອາຄານ ແລະ ສິ່ງແວດລ້ອມ", input_type: "T2-2", 
          column:
          {columnHead:
            [
              {id:1, ENdescription: "No", LAdescription:"ລຳດັບ", inputType:"No"},
              {id:2, ENdescription: "Buildings_and_structures_name", LAdescription:"ຊື່ອາຄານ", inputType:"text-area" },
              {id:3, ENdescription: "Describing_Buildings", LAdescription:"ລັກສະນະອາຄານ", inputType:"text-area" },
              {id:4, ENdescription: "Building_size", LAdescription:"ຂະໜາດອາຄານ", inputType:"text-area" },
              {id:5, ENdescription: "Usability", LAdescription:"ການນຳໃຊ້/ການນຳໃຊ້ສະເພາະ", inputType:"text-area" }
            ] 
          }, main_key : "232" 
        },
        { classified: "sub_head", code: "232C", ENdescription: "Construction Permit No.",LAdescription: "ໃບອະນຸຍາດປຸກສ້າງໂຮງງານ ເລກທີ", input_type: "text", main_key : "232" },
      
        { classified: "title", code: "232D", ENdescription: "Layout plans",LAdescription: "ແຜນຜັງການກໍ່ສ້າງ ແລະ ລະບົບເຕັກນິກໂຮງງານ", input_type: null },
        { classified: "sub_head", code: "232D1", ENdescription: "Land plot layout indicating structures and buildings for industrail Area",LAdescription: "ແຜນຜັງສະແດງສິ່ງປຸກສ້າງໃນບໍລິເວນໂຮງງານ", input_type: "file-P", main_key : "232D" },
        { classified: "sub_head", code: "232D2", ENdescription: "Factory building layout",LAdescription: "ແຜນຜັງກໍ່ສ້າງອາຄານຜະລິດ (ຮູບດ້ານໜ້າ, ຂ້າງ, ຫຼັງ ແລະ ຮູບຕັດ)", input_type: "file-P", main_key : "232D" },
        { classified: "sub_head", code: "232D3", ENdescription: "Chemical storage layout",LAdescription: "ແຜນຜັງການກໍ່ສ້າງສາງເກັບມ້ຽນເຄມີ", input_type: "file-P", main_key : "232D" },
      ],
      form240: [
        { classified: "heading", code: "240", ENdescription: "Controlled Area",LAdescription: "ອາຄານ ແລະ ພື້ນທີ່ຄວບຄຸມ ", input_type: null },
        { classified: "sub_head", code: "240A", ENdescription: "Chemical storage detail",LAdescription: "ຫ້ອງເກັບສານເຄມີ", input_type: "text", main_key : "240" },
        { classified: "sub_head", code: "240B", ENdescription: "Chemical waste storage detail",LAdescription: "ຫ້ອງເກັບສິ່ງເສດເຫຼືອເຄມີ", input_type: "text", main_key : "240" },
        { classified: "sub_head", code: "240C", ENdescription: "raw material storage detail",LAdescription: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບວັດຖຸດິບ", input_type: "text", main_key : "240" },
        { classified: "sub_head", code: "240D", ENdescription: "fuel detail",LAdescription: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບເຊື້ອໄຟ", input_type: "text", main_key : "240" },
      ],
      form250: [
        { classified: "heading", code: "250", ENdescription: "Related documents",LAdescription: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
        { classified: "sub_head", code: "250A", ENdescription: "License to Utilize Land and Operate a Business",LAdescription: "ໃບອະນຸຍາດນຳໃຊ້ທີ່ດິນ", input_type: "text", main_key : "250" },
        { classified: "sub_head", code: "250B", ENdescription: "Construction Permit",LAdescription: "ໃບອະນຸຍາດປຸກສ້າງໂຮງງານ", input_type: "text", main_key : "250" },
        { classified: "sub_head", code: "250C", ENdescription: "Chemical storage construction Permit",LAdescription: "ໃບອະນຸຍາດສ້າງສາງເກັບມ້ຽນເຄມີ", input_type: "text", main_key : "250" },
      ]
    }
    //*********** ******************************** 300 *******************************************/
    export const form300:any = {
      form310: [
        { classified: "heading", code: "310", ENdescription:"raw materials, Fuel and Chemical", LAdescription: "ການນຳໃຊ້ວັດຖຸດິບ, ເຊື້ອໄຟ ແລະ ສານເຄມີ", input_type: null },
        { classified: "title", code: "311", ENdescription:"raw materials and essential supplies for production", LAdescription: "ວັດຖຸດິບ", input_type: null },
        { classified: "sub_head", code: "311A", ENdescription:"Total raw materials (type)", LAdescription: "ວັດຖຸດິບທັງໝົດ (ຊະນິດ)", input_type: "number", main_key : "311" },
        { classified: "sub_head", code: "311B", ENdescription:"Details of raw materials", LAdescription: "ຂໍ້ມູນວັດຖຸດິບ", input_type: "T3-1",
          column:{
            columnHead:[
                        {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
                        {id:2, descriptionLA:"ຊື່ວັດຖຸດິບ", inputType:"text-area"},
                        {id:3, descriptionLA:"ແຫຼ່ງທີ່ມາ", inputType:"text-area" },
                        {id:4, descriptionLA:"HS Code", inputType:"text-area" },
                        {id:5, descriptionLA:"ປະລິມານການໃຊ້", inputType:"text-area" },
                        {id:6, descriptionLA:"ການຂົນສົ່ງ", inputType:"text-area" },
                        {id:7, descriptionLA:"ການບັນຈຸ", inputType:"text-area" },
                        {id:8, descriptionLA:"ສະຖານທີ່ເກັບ", inputType:"text-area" },
                        {id:9, descriptionLA:"ຂະບວນການນຳໃຊ້", inputType:"text-area" },
                        {id:10, descriptionLA:"ໝາຍເຫດ", inputType:"text-area" },
                        {id:11, descriptionLA:"ຄວບຄຸມ/ບໍ່ຄວບຄຸມ", inputType:"text-area" },
                        {id:12, descriptionLA:"311C ຮູບພາບວັດຖຸດິບ ແລະ ການຈັດເກັບ", inputType:"file" },
                      ] 
                    } , main_key : "311"
                  },
        { classified: "sub_head", code: "311D", ENdescription:"Measures for importing controlled raw materials", LAdescription: "ມາດຕະການສຳລັບນຳເຂົ້າວັດຖຸດິບຄວບຄຸມ", input_type: "text", main_key : "311" },
        { classified: "sub_head", code: "311E", ENdescription:"Measures to inspect the import of controlled raw materials", LAdescription: "ມາດຕະການສຳລັບການຕິດຕາມກວດກາ", input_type: "text", main_key : "311" },
      
        { classified: "title", code: "312", ENdescription:"Fuel", LAdescription: "ເຊື້ອໄຟ", input_type: null },
        { classified: "sub_head", code: "312A", ENdescription:"Fuel (Type)", LAdescription: "ເຊື້ອໄຟທີ່ນຳໃຊ້ (ຊະນິດ)", input_type: "number", main_key : "312" },
        { classified: "sub_head", code: "312B", ENdescription:"Details of Fuel", LAdescription: "ຂໍ້ມູນການໃຊ້ເຊື້ອໄຟ", input_type: "T3-2", 
          column:{
            columnHead:[
                        {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
                        {id:2, descriptionLA:"ປະເພດເຊື້ອໄຟ", inputType:"text-area"},
                        {id:3, descriptionLA:"ແຫຼ່ງທີ່ມາ", inputType:"text-area" },
                        {id:4, descriptionLA:"ປະລິມານການນຳໃຊ້", inputType:"text-area" },
                        {id:5, descriptionLA:"ປະລິມານການກັກເກັບ", inputType:"text-area" },
                        {id:6, descriptionLA:"ການຂົນສົ່ງ", inputType:"text-area" },
                        {id:7, descriptionLA:"ການບັນຈຸ", inputType:"text-area" },
                        {id:8, descriptionLA:"ສະຖານທີ່ເກັບ", inputType:"text-area" },
                        {id:9, descriptionLA:"ຂະບວນການນຳໃຊ້", inputType:"text-area" },
                        {id:10, descriptionLA:"ໝາຍເຫດ", inputType:"text-area" },
                      ] 
                    }, main_key : "312"
                 },
        { classified: "sub_head", code: "312C", ENdescription:"Picture of fuel storage", LAdescription: "ຮູບພາບເຊື້ອໄຟ ແລະ ການຈັດເກັບ", input_type: "file-P", main_key : "312" },
  
        { classified: "title", code: "313", ENdescription:"Chemical", LAdescription: "ສານເຄມີ", input_type: null },
        { classified: "sub_head", code: "313A", ENdescription:"Number of Chemical (Type)", LAdescription: "ສານເຄມີທັງໝົດທີ່ນຳໃຊ້ (ຊະນິດ)", input_type: "number", main_key : "313" },
        { classified: "sub_head", code: "313B", ENdescription:"Total volume of chemical (kg)", LAdescription: "ປະລິມານສານເຄມີທັງໝົດທີ່ນຳໃຊ້ (kg)", input_type: "number", main_key : "313" },
  
        { classified: "title", code: "313C", ENdescription:"Chemical category", LAdescription: "ປະເພດສານເຄມີເປັນພິດອັນຕະລາຍ", input_type: null },
        { classified: "sub_head", code: "313C1", ENdescription:"1st Category (Type)", LAdescription: "ສານເຄມີປະເພດ 1 (ຊະນິດ)", input_type: "number", main_key : "313C" },
        { classified: "sub_head", code: "313C2", ENdescription:"2nd Category (Type)", LAdescription: "ສານເຄມີປະເພດ 2 (ຊະນິດ)", input_type: "number", main_key : "313C" },
        { classified: "sub_head", code: "313C3", ENdescription:"3rd Category (Type)", LAdescription: "ສານເຄມີປະເພດ 3 (ຊະນິດ)", input_type: "number", main_key : "313C" },
        { classified: "sub_head", code: "313C4", ENdescription:"4th Category (Type)", LAdescription: "ສານເຄມີປະເພດ 4 (ຊະນິດ)", input_type: "number", main_key : "313C" },
        { classified: "sub_head", code: "313C5", ENdescription:"Other (Type)", LAdescription: "ສານເຄມີປະເພດອື່ນໆ (ຊະນິດ)", input_type: "number", main_key : "313C" },
  
        { classified: "sub_head", code: "313D", ENdescription:"Details of Chemical", LAdescription: "ສານເຄມີ ແລະ ການນຳໃຊ້", input_type: "T3-3", 
          column:{
            columnHead:[
                        {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
                        {id:2, descriptionLA:"ຊື່ສານເຄມີ", inputType:"text-area"},
                        {id:3, descriptionLA:"ແຫຼ່ງທີ່ມາ", inputType:"text-area" },
                        {id:4, descriptionLA:"ປະລິມານທີ່ໃຊ້ຕໍ່ປີ", inputType:"text-area" },
                        {id:5, descriptionLA:"ປະລິມານກັກເກັບ", inputType:"text-area" },
                        {id:6, descriptionLA:"ການຂົນສົ່ງ", inputType:"text-area" },
                        {id:7, descriptionLA:"ການບັນຈຸ", inputType:"text-area" },
                        {id:8, descriptionLA:"ສະຖານທີ່ເກັບ", inputType:"text-area" },
                        {id:9, descriptionLA:"ຂະບວນການນຳໃຊ້", inputType:"text-area" },
                        {id:10, descriptionLA:"ໝາຍເຫດ", inputType:"text-area" },
                      ] 
                    }, main_key : "313"
                   },
        { classified: "sub_head", code: "313E", ENdescription:"Picture of chemical", LAdescription: "ຮູບພາບສານເຄມີ", input_type: "file-P", main_key : "313" },
        { classified: "sub_head", code: "313F", ENdescription:"Chemical toxicity information", LAdescription: "ຂໍ້ມູນຄວາມເປັນພິດອັນຕະລາຍຂອງສານເຄມີ", input_type: "T3-4", 
          column:{
            columnHead:[
                        {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
                        {id:2, descriptionLA:"ຊື່ສານເຄມີ", inputType:"text-area"},
                        {id:3, descriptionLA:"ລັກສະນະທາງກາຍະພາບ", inputType:"text-area" },
                        {id:4, descriptionLA:"ຄຸນລັກສະນະອັນຕະລາຍ", inputType:"text-area" },
                        {id:5, descriptionLA:"HS Code", inputType:"text-area" },
                        {id:6, descriptionLA:"ປະເພດສານເຄມີອັນຕະລາຍ", inputType:"text-area" },
                        {id:7, descriptionLA:"ອົງປະກອບຫຼັກຂອງເຄມີ", inputType:"text-area" },
                        {id:8, descriptionLA:"C.A.S No.", inputType:"text-area" },
                      ] 
                    }, main_key : "313"
                  },
  
  
      ],
      form320: [
        { classified: "heading", code: "320", ENdescription:"Product and by-product", LAdescription: "ຜະລິດຕະພັນ", input_type: null },
        { classified: "title", code: "321", ENdescription:"Product", LAdescription: "ຜະລິດຕະພັນຫຼັກ", input_type: null },
        { classified: "sub_head", code: "321A", ENdescription:"product (Type)", LAdescription: "ຜະລິດຕະພັນ (ຊະນິດ)", input_type: "number", main_key : "321" },
        { classified: "sub_head", code: "321B", ENdescription:"Production volume per year", LAdescription: "ກຳລັງການຜະລິດປົກກະຕິຕໍ່ປີ", input_type: "text", main_key : "321" },
        { classified: "sub_head", code: "321C", ENdescription:"maximum volume per year", LAdescription: "ກຳລັງການຜະລິດສູງສຸດຕໍ່ປີ", input_type: "text", main_key : "321" },
        { classified: "sub_head", code: "321D", ENdescription:"List of Product", LAdescription: "ຂໍ້ມູນຜະລິດຕະພັນ", input_type: "T3-5", 
          column:{
            columnHead:[
                        {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
                        {id:2, descriptionLA:"ຊື່ຜະລິດຕະພັນ", inputType:"text-area"},
                        {id:3, descriptionLA:"ກຳລັງການຜະລິດປົກກະຕິ", inputType:"text-area" },
                        {id:4, descriptionLA:"ກຳລັງການຜະລິດສູງສຸດ", inputType:"text-area" },
                        {id:5, descriptionLA:"ການບັນຈຸ", inputType:"text-area" },
                        {id:6, descriptionLA:"ສະຖານທີ່ເກັບ", inputType:"text-area" },
                        {id:7, descriptionLA:"ການຂົນສົ່ງ", inputType:"text-area" },
                        {id:8, descriptionLA:"ແຫຼ່ງຈຳໜ່າຍ", inputType:"text-area" },
                        {id:9, descriptionLA:"HS Code", inputType:"text-area" },
                      ] 
                    }, main_key : "321" },
        { classified: "sub_head", code: "321E", ENdescription:"Picture of Product", LAdescription: "ຮູບພາບຜະລິດຕະພັນ", input_type: "file-P", main_key : "321" },
  
        { classified: "title", code: "322", ENdescription:"By-Product", LAdescription: "ຜະລິດຕະພັນຂ້າງຄຽງ", input_type: null },
        { classified: "sub_head", code: "322A", ENdescription:"by-product (Type)", LAdescription: "ຜະລິດຕະພັນຂ້າງຄຽງ (ຊະນິດ)", input_type: "text", main_key : "322" },
        { classified: "sub_head", code: "322B", ENdescription:"List of by-product", LAdescription: "ຂໍ້ມູນຜະລິດຕະພັນຂ້າງຄຽງ", input_type: "T3-6", 
          column:{
            columnHead:[
                        {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
                        {id:2, descriptionLA:"ຊື່ຜະລິດຕະພັນຂ້າງຄຽງ", inputType:"text-area"},
                        {id:3, descriptionLA:"ປະລິມານ", inputType:"text-area" },
                        {id:4, descriptionLA:"ມາຈາກຂະບວນການ", inputType:"text-area" },
                        {id:5, descriptionLA:"ການບັນຈຸ", inputType:"text-area" },
                        {id:6, descriptionLA:"ສະຖານທີ່ເກັບ", inputType:"text-area" },
                      ] 
                    }, main_key : "322" },
        { classified: "sub_head", code: "322C", ENdescription:"Picture of by-Product", LAdescription: "ຮູບພາບຜະລິດຕະພັນຂ້າງຄຽງ", input_type: "file-P", main_key : "322" },
      ],
      form330: [
        { classified: "heading", code: "330", ENdescription:"Machinery, Personnel", LAdescription: "ການນຳໃຊ້ເຄື່ອງຈັກ, ແຮງງານ, ຊັບພະຍາກອນນ້ຳ ແລະ ພະລັງງານໄຟຟ້າ", input_type: null },
        { classified: "title", code: "331", ENdescription:"Machinery", LAdescription: "ການນຳໃຊ້ເຄື່ອງຈັກຫຼັກໃນການຜະລິດ", input_type: null },
        { classified: "sub_head", code: "331A", ENdescription:"Total Machinery Capacity", LAdescription: "ກຳລັງເຄື່ອງຈັກໃນໂຮງງານ", input_type: "text", main_key : "331" },
        { classified: "sub_head", code: "331B", ENdescription:"List of Mechinery in order of the Production Process", LAdescription: "ຂໍ້ມູນເຄື່ອງຈັກໃນໂຮງງານ", input_type: "T3-7",
           column:{
            columnHead:[
                        {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
                        {id:2, descriptionLA:"ຊື່ເຄື່ອງຈັກ", inputType:"text-area"},
                        {id:3, descriptionLA:"ລາຍລະອຽດ", inputType:"text-area" },
                        {id:4, descriptionLA:"ຈຳນວນ", inputType:"text-area" },
                        {id:5, descriptionLA:"ປະເທດຜູ້ຜະລິດ", inputType:"text-area" },
                        {id:6, descriptionLA:"ແຮງມ້າ/ແຮງມ້າປຽບທຽບ", inputType:"text-area" },
                        {id:7, descriptionLA:"ແຮງມ້າລວມ", inputType:"text-area" },
                      ] 
                    }, main_key : "331" },
        { classified: "sub_head", code: "331C", ENdescription:"Picture of Mechinerty", LAdescription: "ຮູບເຄື່ອງຈັກ", input_type: "file", main_key : "331" },
        { classified: "sub_head", code: "331D", ENdescription:"Layout plan, Site plan, Mechinery Installation ", LAdescription: "ແຜນຜັງຕິດຕັ້ງເຄື່ອງຈັກ", input_type: "file", main_key : "331" },
        { classified: "sub_head", code: "331E", ENdescription:"Layout plan, Site plan, Crane, Oven and Steam boiler Installation ", LAdescription: "ແຜນຜັງຕິດຕັ້ງເຄື່ອງຍົກນ້ຳໜັກ, ແຜນຜັງຕິດຕັ້ງເຕົາອົບ ແລະ ເຕົາສະຕີມ", input_type: "file", main_key : "331" },
      
        { classified: "title", code: "332", ENdescription:"Labor", LAdescription: "ການນຳໃຊ້ແຮງງານ", input_type: null },
        { classified: "sub_head", code: "332A", ENdescription:"Number of shift(s)", LAdescription: "ຈຳນວນຜຽນ (ຜຽນ)", input_type: "number", main_key : "332" },
        { classified: "sub_head", code: "332B", ENdescription:"Work Hours", LAdescription: "ຂໍ້ມູນການເຮັດວຽກ", input_type: "T3-8", 
          column:{
            columnHead:[
                        {id:1, descriptionLA:"ຜຽນ", inputType:"text-area"},
                        {id:2, descriptionLA:"ຈຳນວນຜູ້ອອກແຮງ", inputType:"text-area"},
                        {id:3, descriptionLA:"ເວລາເຮັດວຽກ", inputType:"text-area" },
                        {id:4, descriptionLA:"ເວລາ (ຊົ່ວໂມງ)", inputType:"text-area" },
                        {id:5, descriptionLA:"ໝາຍເຫດ", inputType:"text-area" },
                      ] 
                    }, main_key : "332"},
        { classified: "sub_head", code: "332C", ENdescription:"Total Labor (Person(s))", LAdescription: "ຈຳນວນຜູ້ອອກແຮງງານລວມ (ຄົນ)", input_type: "number", main_key : "332" },
      
        { classified: "title", code: "332D", ENdescription:"Type of Labor", LAdescription: "ປະເພດແຮງງານ", input_type: null },
        { classified: "sub_head", code: "332D1", ENdescription:"Officer, Techicians, experts (Person(s)", LAdescription: "ພະນັກງານ-ວິຊາການ-ຊ່ຽວຊານ (ຄົນ)", input_type: "number", main_key : "332D" },
        { classified: "sub_head", code: "332D2", ENdescription:"Worker (Person(s)", LAdescription: "ແຮງງານຜະລິດ (ຄົນ)", input_type: "number", main_key : "332D" },
  
        { classified: "title", code: "332E", ENdescription:"Gender", LAdescription: "ເພດ", input_type: null },
        { classified: "sub_head", code: "332E1", ENdescription:"male", LAdescription: "ຜູ້ຊາຍ (ຄົນ)", input_type: "number", main_key : "332E" },
        { classified: "sub_head", code: "332E2", ENdescription:"female", LAdescription: "ຜູ້ຍິງ (ຄົນ)", input_type: "number", main_key : "332E" },
  
        { classified: "title", code: "332F", ENdescription:"Group of Labor", LAdescription: "ກຸ່ມແຮງງານ", input_type: null },
        { classified: "sub_head", code: "332F1", ENdescription:"National (Person(s)", LAdescription: "ຜູ້ອອກແຮງງານພາຍໃນປະເທດ (ຄົນ)", input_type: "number", main_key : "332F" },
        { classified: "sub_head", code: "332F2", ENdescription:"Foreign (Person(s)", LAdescription: "ຜູ້ອອກແຮງງານຕ່າງປະເທດ (ຄົນ)", input_type: "number", main_key : "332F" },
  
        { classified: "title", code: "332G", ENdescription:"Contractor", LAdescription: "ການໃຊ້ຜູ້ຮັບເໝົາ (ບໍ່ປະຈຳ)", input_type: null },
        { classified: "sub_head", code: "332G1", ENdescription:"Contractor services", LAdescription: "ການນຳໃຊ້", input_type: "text", main_key : "332G" },
        { classified: "sub_head", code: "332G2", ENdescription:"Frequency of using the service", LAdescription: "ຄວາມຖີ່ໃນການໃຊ້", input_type: "text", main_key : "332G" },
        { classified: "sub_head", code: "332G3", ENdescription:"Contractor (Person(s)", LAdescription: "ຈຳນວນ (ຄົນ)", input_type: "number", main_key : "332G" },
  
        { classified: "title", code: "333", ENdescription:"Water usage and storage", LAdescription: "ການນຳໃຊ້ນ້ຳ ແລະ ການກັກເກັບ", input_type: null },
        { classified: "sub_head", code: "333A", ENdescription:"Total water usage (Cubic meter)", LAdescription: "ປະລິມານການນຳໃຊ້ນ້ຳທັງໝົດ (ແມັດກ້ອນ)", input_type: "number", main_key : "333" },
        { classified: "sub_head", code: "333B", ENdescription:"tap water use", LAdescription: "ການນຳໃຊ້ນ້ຳປະປາ", input_type: "text", main_key : "333" },
        { classified: "sub_head", code: "333B1", ENdescription:"tap water usage (Cubic meter)", LAdescription: "ປະລິມານນຳໃຊ້ (ແມັດກ້ອນ)", input_type: "number", main_key : "333" },
        { classified: "sub_head", code: "333B2", ENdescription:"Water meter size", LAdescription: "ຂະໜາດມິເຕີ້", input_type: "text", main_key : "333" },
        { classified: "sub_head", code: "333B3", ENdescription:"Water pipe size", LAdescription: "ຂະໜາດທໍ່", input_type: "text", main_key : "333" },
        
        { classified: "title", code: "333C", ENdescription:"Surface water use", LAdescription: "ການນຳໃຊ້ນ້ຳໜ້າດິນ", input_type: null },
        { classified: "sub_head", code: "333C1", ENdescription:"Surface water use scale", LAdescription: "ຂະໜາດການນຳໃຊ້ນ້ຳ", input_type: "choice", options: sizeOptions, main_key : "333C" },
        { classified: "sub_head", code: "333C2", ENdescription:"Surface water usage (Cubic meter)", LAdescription: "ປະລິມານການໃຊ້ (ແມັດກ້ອນ)", input_type: "number", main_key : "333C" },
        { classified: "sub_head", code: "333C3", ENdescription:"Surface water source", LAdescription: "ແຫຼ່ງນ້ຳໜ້າດິນທີ່ນຳໃຊ້", input_type: "text", main_key : "333C" },
        
        { classified: "title", code: "333D", ENdescription:"Groundwater use", LAdescription: "ການນຳໃຊ້ນໍ້າໃຕ້ດິນ", input_type: null },
        { classified: "sub_head", code: "333D1", ENdescription:"Groundwater use scale", LAdescription: "ຂະໜາດການນຳໃຊ້ນ້ຳໃຕ້ດິນ", input_type: "choice", options: sizeOptions, main_key : "333D" },
        { classified: "sub_head", code: "333D2", ENdescription:"Groundwater usage (Cubic meter)", LAdescription: "ປະລິມານການໃຊ້ (ແມັດກ້ອນ)", input_type: "number", main_key : "333D" },
        { classified: "sub_head", code: "333D3", ENdescription:"Artesian well (point)", LAdescription: "ຈຳນວນບໍ່ນ້ຳບາດານ/ບໍ່ນ້ຳສ້າງ (ຈຸດ)", input_type: "number", main_key : "333D" },
        { classified: "sub_head", code: "333D4", ENdescription:"Artesian well Detials", LAdescription: "ຂໍ້ມູນບໍ່ນ້ຳບາດານ/ບໍ່ນ້ຳສ້າງ", input_type: "T3-9",
           column:{
            columnHead:[
                        {id:1, descriptionLA:"ບໍນ້ຳບາດານ/ນ້ຳສ້າງ ເລກທີ", inputType:"text-area"},
                        {id:2, descriptionLA:"ພິກັດ", inputType:"text-area"},
                        {id:3, descriptionLA:"ຄວາມເລິກ", inputType:"text-area" },
                        {id:4, descriptionLA:"ຂະໜາດປ້ຳ", inputType:"text-area" },
                      ] 
                    }, main_key : "333D"
                  },
        { classified: "sub_head", code: "333D5", ENdescription:"Layout of artesian well", LAdescription: "ແຜນຜັງບໍ່ນ້ຳບາດານ/ບໍ່ນ້ຳສ້າງ", input_type: "file", main_key : "333D" },
        { classified: "sub_head", code: "333D6", ENdescription:"underground water meter", LAdescription: "ໝໍ້ວັດປະລິມານການນຳໃຊ້ນ້ຳໃຕ້ດິນ", input_type: "choice", options: haveOrNoOptions, main_key : "333D" },
        
        { classified: "title", code: "333E", ENdescription:"wastewater reuse", LAdescription: "ການນຳໃຊ້ນ້ຳຄືນໃໝ່", input_type: null },
        { classified: "sub_head", code: "333E1", ENdescription:"wastewater reuse", LAdescription: "ການນຳໃຊ້ນ້ຳຄືນໃໝ່", input_type: "choice", options: haveOrNoOptions, main_key : "333E" },
        { classified: "sub_head", code: "333E2", ENdescription:"Used for", LAdescription: "ນຳໃຊ້ໃນຂະບວນການ", input_type: "text", main_key : "333E" },
  
        { classified: "sub_head", code: "333F", ENdescription:"Using water for consumption", LAdescription: "ຂໍ້ມູນການໃຊ້ນ້ຳເຂົ້າໃນການອຸປະໂພກ", input_type: "T3-10", 
          column:{
            columnHead:[
                        {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
                        {id:2, descriptionLA:"ປະເພດນ້ຳໃຊ້", inputType:"text-area"},
                        {id:3, descriptionLA:"ການນຳໃຊ້", inputType:"text-area" },
                        {id:4, descriptionLA:"ປະລິມານນຳໃຊ້", inputType:"text-area" },
                      ] 
                    }, main_key : "333E"
                  },
        { classified: "sub_head", code: "333G", ENdescription:"Using water for Production", LAdescription: "ຂໍ້ມູນການນຳໃຊ້ນ້ຳເຂົ້າໃນການຜະລິດ", input_type: "T3-11",
           column:{
            columnHead:[
                        {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
                        {id:2, descriptionLA:"ຊື່ຂະບວນການ", inputType:"text-area"},
                        {id:3, descriptionLA:"ປະເພດນ້ຳໃຊ້", inputType:"text-area" },
                        {id:4, descriptionLA:"ປະລິມານນຳໃຊ້", inputType:"text-area" },
                      ] 
                    }, main_key : "333E"
                  },
        { classified: "sub_head", code: "333H", ENdescription:"Water storage and water retention (Point)", LAdescription: "ການກັກເກັບ (ຈຸດ)", input_type: "number", main_key : "333E" },
        { classified: "sub_head", code: "333I", ENdescription:"Storage volunm (Cubic meter)", LAdescription: "ປະລິມານກັກເກັບລວມ (ແມັດກ້ອນ)", input_type: "number", main_key : "333E" },
        { classified: "sub_head", code: "333J", ENdescription:"Water storage and water retention Details", LAdescription: "ຂໍ້ມູນການກັກເກັບນ້ຳ", input_type: "T3-12", 
          column:{
            columnHead:[
                        {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
                        {id:2, descriptionLA:"ປະເພດການກັກເກັບ", inputType:"text-area"},
                        {id:3, descriptionLA:"ປະລິມານການກັກເກັບ (ແມັດກ້ອນ)", inputType:"text-area" },
                        {id:4, descriptionLA:"ຂະໜາດຂອງອ່າງ, ໜອງ", inputType:"text-area" },
                        {id:5, descriptionLA:"ຂະໜາດ", inputType:"text-area" },
                      ] 
                    }, main_key : "333E"
                  },
  
        { classified: "title", code: "334", ENdescription:"Electricity usage", LAdescription: "ການນຳໃຊ້ໄຟຟ້າ", input_type: null },
        { classified: "sub_head", code: "334A", ENdescription:"Transmission line voltage", LAdescription: "ຂະໜາດຂ່າຍສານໄຟຟ້າ", input_type: "text", main_key : "334" },
        { classified: "sub_head", code: "334B", ENdescription:"Number and size (KVA) of Power transformer", LAdescription: "ຈຳນວນໝໍ້ແປງ ແລະ ຂະໜາດ (KVA)", input_type: "text", main_key : "334" },
        { classified: "sub_head", code: "334C", ENdescription:"Total rated power", LAdescription: "ຂະໜາດໝໍ້ແປງລວມ (KVA)", input_type: "number", main_key : "334" },
        { classified: "sub_head", code: "334D", ENdescription:"", LAdescription: "ພະລັງງານໄຟຟ້າສະເລ່ຍ (Kw/ມື້)", input_type: "number", main_key : "334" },
        { classified: "sub_head", code: "334E", ENdescription:"", LAdescription: "ໄຟຟ້າສຳຮອງ", input_type: "text", main_key : "334" },
        { classified: "sub_head", code: "334F", ENdescription:"", LAdescription: "ແຜນຜັງຕິດຕັ້ງລະບົບໄຟຟ້າ", input_type: "file", main_key : "334" },
      ],
      form340: [
        { classified: "heading", code: "340", ENdescription:"Details on Production and activities", LAdescription: "ຂະບວນການຜະລິດຫຼັກ ແລະ ສະໜັບສະໜຸນ", input_type: null },
        { classified: "title", code: "341", ENdescription:"Details on Main Production", LAdescription: "ຂະບວນການຜະລິດຫຼັກ", input_type: null },
        { classified: "sub_head", code: "341A", ENdescription:"Number of line production", LAdescription: "ຈຳນວນສາຍ, ຊຸດການຜະລິດ", input_type: "number", main_key : "341" },
        { classified: "sub_head", code: "341B", ENdescription:"type of production", LAdescription: "ຮູບແບບການຜະລິດ", input_type: "choice", options: processOptions, main_key : "341" },
        { classified: "sub_head", code: "341C", ENdescription:"Production Workflow", LAdescription: "ແຜນວາດຂະບວນການຜະລິດ (Workflow)", input_type: "file", main_key : "341" },
        { classified: "sub_head", code: "341D", ENdescription:"Details on Production", LAdescription: "ຂໍ້ມູນຂະບວນການຜະລິດ", input_type: "T3-13",
           column:{
            columnHead:[
                        {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
                        {id:2, descriptionLA:"ຊື່ຂັ້ນຕອນ", inputType:"text-area"},
                        {id:3, descriptionLA:"ອະທິບາຍໂດຍຫຍໍ້", inputType:"text-area" },
                        {id:4, descriptionLA:"ວັດຖຸດິບທີ່ນຳໃຊ້", inputType:"text-area" },
                        {id:5, descriptionLA:"ສານເຄມີທີ່ນຳໃຊ້", inputType:"text-area" },
                      ] 
                    }, main_key : "341"
                   },
        { classified: "sub_head", code: "341E", ENdescription:"Picture of production", LAdescription: "ຮູບພາບຂະບວນການຜະລິດ", input_type: "file", main_key : "341" },
  
        { classified: "title", code: "342", ENdescription:"Process utility system", LAdescription: "ຂະບວນການສະໜັບສະໜຸນ ແລະ ກິດຈະກຳທີ່ເຮັດໃຫ້ເກີດສິ່ງເສດເຫຼືອ ແລະ ມົນລະພິດສິ່ງແວດລ້ອມ", input_type: null },
        { classified: "sub_head", code: "342A", ENdescription:"Maintenance section", LAdescription: "ໜ່ວຍສ້ອມແປງ ແລະ ບຳລຸງຮັກສາ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342B", ENdescription:"Electricity generation system", LAdescription: "ລະບົບຜະລິດໄຟຟ້າ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342C", ENdescription:"Water Production system", LAdescription: "ລະບົບປັບປຸງຄຸນນະພາບນ້ຳ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342D", ENdescription:"Boiler", LAdescription: "ໝໍ້ຕົ້ມນ້ຳ (Boiler)", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342E", ENdescription:"Cooling Tower", LAdescription: "ຫໍຫຼໍ່ເຢັນ (Cooling Tower) ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342F", ENdescription:"Preparation of raw materials and mixing of chemicals", LAdescription: "ການກຽມວັດຖຸດິບ ແລະ ປະສົມສານເຄມີ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342G", ENdescription:"cleaning the work area and equipment", LAdescription: "ການອະນາໄມ-ລ້າງທຳຄວາມສະອາດພື້ນທີ່ການຜະລິດ ແລະ ອື່ນໆ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342H", ENdescription:"Laboratory", LAdescription: "ຫ້ອງປະຕິບັດການວິເຄາະ", input_type: "text", main_key : "342" },
        { classified: "sub_head", code: "342I", ENdescription:"Another", LAdescription: "ອື່ນໆ", input_type: "text", main_key : "342" },
      ],
      form350: [
        { classified: "heading", code: "350", ENdescription:"", LAdescription: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
        { classified: "sub_head", code: "350A", ENdescription:"", LAdescription: "ໃບຢັ້ງຢືນກ່ຽວກັບແຫຼ່ງທີ່ມາວັດຖຸດິບ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350B", ENdescription:"", LAdescription: "ໃບອະນຸຍາດນຳເຂົ້າ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350C", ENdescription:"", LAdescription: "ໃບທະບຽນບັນຊີເຄມີ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350D", ENdescription:"", LAdescription: "ເອກະສານຂໍ້ມູນຄວາມປອດໄພເຄມີ (safety data sheet)", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350E", ENdescription:"", LAdescription: "ໃບຢັ້ງຢືນຜົນການວິເຄາະເຄມີ (ກໍລະນີເປັນທາດປະສົມ)", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350F", ENdescription:"", LAdescription: "ສະຫຼາກເຄມີ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350G", ENdescription:"", LAdescription: "ໃບອະນຸຍາດນຳໃຊ້ນ້ຳໜ້າດິນ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350H", ENdescription:"", LAdescription: "ໃບອະນຸຍາດນຳໃຊ້ນ້ຳໃຕ້ດິນ", input_type: "file", main_key : "350" },
        { classified: "sub_head", code: "350I", ENdescription:"", LAdescription: "ໃບອະນຸຍາດຂຸດເຈາະ ຫຼື ຊີເຈາະນ້ຳໃຕ້ດິນ", input_type: "file", main_key : "350" },
      ]
    };
//************************************************ 400 ************************************************************************ */
export const form400:any = {
  form410: [
    { classified: "heading", code: "410",  descriptionEN: "", descriptionLA: "ສິ່ງເສດເຫຼືອຈາກອາຄານສຳນັກງານ", input_type: null },
    { classified: "title", code: "411",  descriptionEN: "", descriptionLA: "ສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ", input_type: null },
    { classified: "sub_head", code: "411A",  descriptionEN: "", descriptionLA: "ປະລິມານສິ່ງເສດເຫຼືອລວມ (Kg/ເດືອນ)", input_type: "text", main_key : "411" },
    { classified: "sub_head", code: "411B",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນສິ່ງເສດເຫຼືອທົ່ວໄປ", input_type: "T4-1", 
      column:{
        columnHead:[
          {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
          {id:2, descriptionLA:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, descriptionLA:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, descriptionLA:"ແຫຼ່ງທີ່ມາ", inputType:"choice" },
          {id:5, descriptionLA:"ປະລິມານ (Kg/ເດືອນ)", inputType:"text-area" },
          {id:6, descriptionLA:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
          {id:7, descriptionLA:"ການກຳຈັດ", inputType:"choice" }
        ]
        , options:[ 
          {forID:4, options: referentOptions},
          {forID:7, options: removalOptions}]
       } , main_key : "411"
      },
    { classified: "title", code: "412",  descriptionEN: "", descriptionLA: "ສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ", input_type: null },
    { classified: "sub_head", code: "412A",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍຈາກສຳນັກງານ, ອາຄານ", input_type: "T4-2", 
      column:{
        columnHead:[
          {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
          {id:2, descriptionLA:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, descriptionLA:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, descriptionLA:"ແຫຼ່ງທີ່ມາ", inputType:"choice" },
          {id:5, descriptionLA:"ປະລິມານ (Kg/ປີ)", inputType:"text-area" },
          {id:6, descriptionLA:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
          {id:7, descriptionLA:"ການກຳຈັດ", inputType:"choice" }
        ]
        , options:[ 
          {forID:4, options: referentOptions},
          {forID:7, options: removalT4_2Options}]
       }, main_key : "412"
      },


    
  ],
  form420: [
    { classified: "heading", code: "420",  descriptionEN: "", descriptionLA: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳ", input_type: null },
    { classified: "sub_head", code: "420A",  descriptionEN: "", descriptionLA: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳ (ລາຍການ)", input_type: "number", main_key : "420" },
    { classified: "sub_head", code: "420B",  descriptionEN: "", descriptionLA: "ປະລິມານສິ່ງເສດເຫຼືອອຸດສາຫະກຳ", input_type: "text", main_key : "420" },
    { classified: "sub_head", code: "420C",  descriptionEN: "", descriptionLA: "ແຫຼ່ງກຳເນີດສິ່ງເສດເຫຼືອ", input_type: "T4-3", 
      column:{
        columnHead:[
          {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
          {id:2, descriptionLA:"ແຫຼ່ງກຳເນີດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, descriptionLA:"ສິ່ງເສດເຫຼືອທີ່ເກີດ", inputType:"text-area" },
        ]
       } , main_key : "420"
       },
    { classified: "sub_head", code: "420D",  descriptionEN: "", descriptionLA: "ແຜນຜັງການເກີດສິ່ງເສດເຫຼືອໃນຂະບວນການ", input_type: "file" , main_key : "420"},

    { classified: "title", code: "421",  descriptionEN: "", descriptionLA: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳບໍ່ເປັນພິດອັນຕະລາຍ", input_type: null },
    { classified: "sub_head", code: "421A",  descriptionEN: "", descriptionLA: "ສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ (ລາຍການ)", input_type: "number", main_key : "421" },
    { classified: "sub_head", code: "421B",  descriptionEN: "", descriptionLA: "ປະລິມານສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ", input_type: "text", main_key : "421" },
    { classified: "sub_head", code: "421C",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນສິ່ງເສດເຫຼືອບໍ່ເປັນພິດ ແລະ ອັນຕະລາຍ", input_type: "T4-4", 
      column:{
        columnHead:[
          {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
          {id:2, descriptionLA:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, descriptionLA:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, descriptionLA:"ປະລິມານ (Kg/ເດືອນ)", inputType:"text-area" },
          {id:5, descriptionLA:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
          {id:6, descriptionLA:"ຮູບພາບ", inputType:"file" }
        ]
       }, main_key : "421" 
       },

    { classified: "title", code: "422",  descriptionEN: "", descriptionLA: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳເປັນພິດອັນຕະລາຍ", input_type: null },
    { classified: "sub_head", code: "422A",  descriptionEN: "", descriptionLA: "ສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ (ລາຍການ)", input_type: "number", main_key : "422" },
    { classified: "sub_head", code: "422B",  descriptionEN: "", descriptionLA: "ປະລິມານສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ", input_type: "text", main_key : "422" },
    { classified: "sub_head", code: "422C",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນສິ່ງເສດເຫຼືອເປັນພິດ ແລະ ອັນຕະລາຍ", input_type: "T4-5", 
      column:{
        columnHead:[
          {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
          {id:2, descriptionLA:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, descriptionLA:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, descriptionLA:"ປະລິມານ (Kg/ເດືອນ)", inputType:"text-area" },
          {id:5, descriptionLA:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
          {id:6, descriptionLA:"ຮູບພາບ", inputType:"file" }
        ]
       }, main_key : "422"
       },
  ],
  form430: [
    { classified: "heading", code: "430",  descriptionEN: "", descriptionLA: "ສະຖານທີ່ເກັບທ້ອນໂຮມສິ່ງເສດເຫຼືອ", input_type: null },
    { classified: "sub_head", code: "430A",  descriptionEN: "", descriptionLA: "ຈຳນວນສະຖານທີ່ເກັບທ້ອນໂຮມສິ່ງເສດເຫຼືອ", input_type: "text", main_key : "430" },
    { classified: "sub_head", code: "430B",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນສະຖານທີ່ເກັບທ້ອນໂຮມສິ່ງເສດເຫຼືອ", input_type: "T4-6", 
      column:{
        columnHead:[
          {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
          {id:2, descriptionLA:"ຊື່ພື້ນທີ່ເກັບ", inputType:"text-area" },
          {id:3, descriptionLA:"ປະລິມານສູງສຸດທີ່ສາມາດເກັບໄດ້ (Kg)", inputType:"text-area" },
          {id:4, descriptionLA:"ເນື້ອທີ່", inputType:"text-area" },
          {id:5, descriptionLA:"ປະເພດສິ່ງເສດເຫຼືອທີ່ຈັດເກັບ", inputType:"multi-choice" },
          {id:6, descriptionLA:"ປະເພດສາງ", inputType:"choice" },
          {id:7, descriptionLA:"ຮູບພາບ", inputType:"file" }
        ], 
        options:[ 
          {forID:5, options: typesOfStoredWasteOptions},
          {forID:6, options: typesOfWarehouseOptions}]
       }, main_key : "430"
       },
    { classified: "sub_head", code: "430C",  descriptionEN: "", descriptionLA: "ແຜນຜັງສະຖານທີ່ເກັບສິ່ງເສດເຫຼືຶອ", input_type: "file", main_key : "430" },  
  ],
  form440: [
    { classified: "heading", code: "440",  descriptionEN: "", descriptionLA: "ການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອ", input_type: null },
    { classified: "title", code: "441",  descriptionEN: "", descriptionLA: "ການບຳບັດ-ກຳຈັດພາຍໃນ", input_type: null },
    { classified: "sub_head", code: "441A",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນການບຳບັດ-ກຳຈັດພາຍໃນໂຮງງານ", input_type: "T4-7", 
      column:{
        columnHead:[
          {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
          {id:2, descriptionLA:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, descriptionLA:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, descriptionLA:"ວິທີບຳບັດ-ກຳຈັດ", inputType:"text-area" },
        ]
       }, main_key : "441"
       },

    { classified: "title", code: "442",  descriptionEN: "", descriptionLA: "ການບຳບັດ-ກຳຈັດພາຍນອກ", input_type: null },
    { classified: "sub_head", code: "442A",  descriptionEN: "", descriptionLA: "ການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ", input_type: "T4-8", 
      column:{
        columnHead:[
          {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
          {id:2, descriptionLA:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, descriptionLA:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, descriptionLA:"ຜູ້ຮັບບຳບັດ-ກຳຈັດ", inputType:"text-area" },
          {id:5, descriptionLA:"ວິທີບຳບັດ-ກຳຈັດ", inputType:"text-area" },
          {id:6, descriptionLA:"ລະຫັດບຳບັດ-ກຳຈັດ", inputType:"multi-choice" },
          {id:7, descriptionLA:"ຄວາມຖີ່ໃນການສົ່ງບຳບັດ-ກຳຈັດ", inputType:"file" }
        ],options:[ 
          {forID:6, options: groupedOptions}]
       }, main_key : "442" },
    { classified: "sub_head", code: "442B",  descriptionEN: "", descriptionLA: "ການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ", input_type: "T4-9", 
      column:{
        columnHead:[
          {id:1, descriptionLA:"ລຳດັບ", inputType:"No"},
          {id:2, descriptionLA:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:3, descriptionLA:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
          {id:4, descriptionLA:"ຜູ້ຮັບບຳບັດ-ກຳຈັດ", inputType:"text-area" },
          {id:5, descriptionLA:"ວິທີບຳບັດ-ກຳຈັດ", inputType:"text-area" },
          {id:6, descriptionLA:"ລະຫັດບຳບັດ-ກຳຈັດ", inputType:"multi-choice" },
          {id:7, descriptionLA:"ຄວາມຖີ່ໃນການສົ່ງບຳບັດ-ກຳຈັດ", inputType:"file" }
        ],options:[ 
          {forID:6, options: groupedOptions}]
       } , main_key : "442" 
      },
  ],
  form450: [
    { classified: "heading", code: "450",  descriptionEN: "", descriptionLA: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
    { classified: "sub_head", code: "450A",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນລະອຽດການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອພາຍໃນໂຮງງານ", input_type: "file", main_key : "450" },
    { classified: "sub_head", code: "450B",  descriptionEN: "", descriptionLA: "ໃບອະນຸຍາດໃຫ້ບໍລິການວິຊາການດ້ານສິ່ງແວດລ້ອມ", input_type: "file", main_key : "450" },
  ]
};
//************************************************ 500 ************************************************************************ */
    export const form500:any = {
      form510: [
          { classified: "heading", code: "500",  descriptionEN: "", descriptionLA: "ການປ່ອຍນ້ຳເປື້ອນ", input_type: null },
          { classified: "sub_head", code: "510A",  descriptionEN: "", descriptionLA: "ໃບອະນຸຍາດປ່ອຍສານມົນລະພິດ (ນ້ຳເປື້ອນ) ເລກທີ", input_type: "text", main_key : "500" },
          { classified: "sub_head", code: "510B",  descriptionEN: "", descriptionLA: "ຈຳນວນຈຸດປ່ອຍນ້ຳເປື້ອນ", input_type: "number", main_key : "500" },
          { classified: "sub_head", code: "510C",  descriptionEN: "", descriptionLA: "ປະລິມານການປ່ອຍລວມ (m3/ວັນ)", input_type: "number", main_key : "500" },
          { classified: "sub_head", code: "510D",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນຈຸດປ່ອຍນ້ຳເປື້ອນ (T5-1)", input_type: "T5-1",
        column: {
          columnHead: [
            { id:1, descriptionLA:"ຈຸດລວບລວມ ຫຼື ປ່ອຍນ້ຳເປື້ອນເລກທີ", inputType:"text-area" },
            { id:2, descriptionLA:"ປະລິມານການປ່ອຍ (m3/ວັນ)", inputType:"text-area" },
            { id:3, descriptionLA:"ຄວາມຖີ່ໃນການປ່ອຍ", inputType:"text-area" },
            { id:4, descriptionLA:"ການກວດກາວັດແທກ", inputType:"choice" },
            { id:5, descriptionLA:"ໝາຍເຫດ", inputType:"text-area" }
          ],
          options:[
            { forID:4, options: haveOrNoOptions}
          ]
        }, main_key : "500"
           },
          { classified: "sub_head", code: "510E",  descriptionEN: "", descriptionLA: "ການລະບາຍນ້ຳພາຍໃນໂຮງງານ (P5-1)", input_type: "file-P", main_key : "500" },
        ],
        form520: [
          { classified: "heading", code: "520",  descriptionEN: "", descriptionLA: "ແຫຼ່ງນ້ຳເປື້ອນ", input_type: null },
          { classified: "title", code: "521",  descriptionEN: "", descriptionLA: "ແຫຼ່ງທີ່ມາຂອງນ້ຳເປື້ອນຈາກອາຄານສຳນັກງານ ແລະ ການຄຸ້ມຄອງ", input_type: null },
          { classified: "sub_head", code: "521A",  descriptionEN: "", descriptionLA: "ແຫຼ່ງທີ່ມາຂອງນ້ຳເປື້ອນຈາກອາຄານສຳນັກງານ (T5-2)", input_type: "T5-2", 
            column: {
              columnHead: [
                { id:1, descriptionLA:"ລຳດັບ", inputType:"No" },
                { id:2, descriptionLA:"ອາຄານ", inputType:"text-area" },
                { id:3, descriptionLA:"ເນື້ອທີ່ອາຄານ", inputType:"choice" },
                { id:4, descriptionLA:"ປະລິມານນ້ຳເປື້ອນ", inputType:"text-area" },
                { id:5, descriptionLA:"ມາດຕະຖານຄຸ້ມຄອງ", inputType:"choice" },
                { id:6, descriptionLA:"ຈຸດລວບລວມ ຫຼື ປ່ອຍນ້ຳເປື້ອນເລກທີ", inputType:"text-area" }
              ],
              options:[
                { forID:3, options: areaOptions},
                { forID:5, options: coverStandardOptions}
              ]
            } , main_key : "521"},
          { classified: "title", code: "522",  descriptionEN: "", descriptionLA: "ແຫຼ່ງທີ່ມາຂອງນ້ຳເປື້ອນຈາກການຜະລິດ ແລະ ການຄຸ້ມຄອງ", input_type: null },
          { classified: "sub_head", code: "522A",  descriptionEN: "", descriptionLA: "ແຫຼ່ງທີ່ມາຂອງນ້ຳເປື້ອນຈາກການຜະລິດ (T5-3)", input_type: "T5-3" , 
            column: {
              columnHead: [
                { id:1, descriptionLA:"ລຳດັບ", inputType:"No" },
                { id:2, descriptionLA:"ຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                { id:3, descriptionLA:"ໝາຍເຫດ", inputType:"text-area" },
              ],
            } , main_key : "522"},
          { classified: "sub_head", code: "522B",  descriptionEN: "", descriptionLA: "ແຜນຜັງການເກີດນ້ຳເປື້ອນໃນຂະບວນການ (P5-2)", input_type: "file-P", main_key : "522"},
        ],
        form530: [
          { classified: "heading", code: "530",  descriptionEN: "", descriptionLA: "ຄຸນນະພາບນ້ຳກ່ອນດຳເນີນກິດຈະການ", input_type: null },
          { classified: "title", code: "531",  descriptionEN: "", descriptionLA: "ຄຸນນະພາບນ້ຳໜ້າດິນກ່ອນດຳເນີນກິດຈະການ", input_type: null },
          { classified: "sub_head", code: "531A",  descriptionEN: "", descriptionLA: "ຈຳນວນຈຸດເກັບຕົວຢ່າງນ້ຳໜ້າດິນກ່ອນດຳເນີນກິດຈະການ", input_type: "number", main_key : "531" },
          { classified: "sub_head", code: "531B",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນຈຸດກວດກາວັດແທກ (T5-4)", input_type: "T5-4", 
            column: {
              columnHead: [
                { id:1, descriptionLA:"ລຳດັບ", inputType:"No" },
                { id:2, descriptionLA:"ຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                { id:3, descriptionLA:"ພິກັດ gps", inputType:"text-area" },
                { id:4, descriptionLA:"ໝາຍເຫດ", inputType:"text-area" },
              ],
            } , main_key : "531"
           },

          { classified: "title", code: "532",  descriptionEN: "", descriptionLA: "ຄຸນນະພາບນ້ຳໃຕ້ດິນກ່ອນດຳເນີນກິດຈະການ", input_type: null },
          { classified: "sub_head", code: "532A",  descriptionEN: "", descriptionLA: "ຈຳນວນຈຸດເກັບຕົວຢ່າງນ້ຳໃຕ້ດິນກ່ອນດຳເນີນກິດຈະການ", input_type: "number", main_key : "532" },
          { classified: "sub_head", code: "532B",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນຈຸດກວດກາວັດແທກນ້ຳໃຕ້ດິນກ່ອນດຳເນີນກິດຈະການ (T5-5)", input_type: "T5-5", 
            column: {
              columnHead: [
                { id:1, descriptionLA:"ລຳດັບ", inputType:"No" },
                { id:2, descriptionLA:"ຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                { id:3, descriptionLA:"ພິກັດ gps", inputType:"text-area" },
                { id:4, descriptionLA:"ໝາຍເຫດ", inputType:"text-area" },
              ],
            } , main_key : "532"
           },
        ],
        form540: [
          { classified: "heading", code: "540",  descriptionEN: "", descriptionLA: "ການຕິດຕາມກວດກາຄຸນນະພາບນ້ຳ", input_type: null },
          { classified: "title", code: "541",  descriptionEN: "", descriptionLA: "ການຕິດຕາມກວດການ້ຳເປື້ອນ", input_type: null },
          { classified: "sub_head", code: "541A",  descriptionEN: "", descriptionLA: "ຈຳນວນຈຸດຕິດຕາມກວດການ້ຳເປື້ອນ", input_type: "text", main_key : "541" },
          { classified: "sub_head", code: "541B",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນຈຸດຕິດຕາມກວດການ້ຳເປື້ອນ (T5-6)", input_type: "T5-6", 
            column: {
              columnHead: [
                { id:1, descriptionLA:"ຈຸດກວດກາເລກທີ", inputType:"text-area" },
                { id:2, descriptionLA:"ລາຍລະອຽດຈຸດເກັບຢ່າງ", inputType:"text-area" },
                { id:3, descriptionLA:"ຄວາມຖີ່ໃນການກວດກາ", inputType:"text-area" },
                { id:4, descriptionLA:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
              ],
            } , main_key : "541"
            },
          { classified: "sub_head", code: "541C",  descriptionEN: "", descriptionLA: "ມາດຕະຖານຄວບຄຸມນ້ຳເປື້ອນ (T5-7)", input_type: "T5-7", duplicates: true,
            column: {
              columnHead: [
                { id:1, descriptionLA:"ລຳດັບ", inputType:"No" },
                { id:2, descriptionLA:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
                { id:3, descriptionLA:"ສັນຍາລັກ", inputType:"text-area" },
                { id:4, descriptionLA:"ມາດຕະຖານຄວບຄຸມ", inputType:"text-area" },
                { id:5, descriptionLA:"ຫົວໜ່ວຍ", inputType:"text-area" },
                { id:6, descriptionLA:"ວິທີການກວດກາວັດແທກ", inputType:"text-area" },
              ],
            } , main_key : "541"
           },
          
          { classified: "title", code: "542",  descriptionEN: "", descriptionLA: "ການຕິດຕາມກວດກາຄຸນນະພາບນ້ຳໃຕ້ດິນ", input_type: null },
          { classified: "sub_head", code: "542A",  descriptionEN: "", descriptionLA: "ຈຳນວນຈຸດຕິດຕາມກວດການ້ຳໃຕ້ດິນ", input_type: "text", main_key : "542" },
          { classified: "sub_head", code: "542B",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນຈຸດຕິດຕາມກວດການ້ຳໃຕ້ດິນ (T5-8)", input_type: "T5-8", 
            column: {
              columnHead: [
                { id:1, descriptionLA:"ຈຸດກວດກາເລກທີ", inputType:"No" },
                { id:2, descriptionLA:"ລາຍລະອຽດຈຸດເກັບຢ່າງ", inputType:"text-area" },
                { id:3, descriptionLA:"ຄວາມຖີ່ໃນການກວດກາ", inputType:"text-area" },
                { id:4, descriptionLA:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
              ],
            } , main_key : "542"
            },
          { classified: "sub_head", code: "542C",  descriptionEN: "", descriptionLA: "ມາດຕະຖານຄວບຄຸມນ້ຳໃຕ້ດິນ (T5-9)", input_type: "T5-9", 
            column: {
              columnHead: [
                { id:1, descriptionLA:"ລຳດັບ", inputType:"No" },
                { id:2, descriptionLA:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
                { id:3, descriptionLA:"ສັນຍາລັກ", inputType:"text-area" },
                { id:4, descriptionLA:"ມາດຕະຖານຄວບຄຸມ", inputType:"text-area" },
                { id:5, descriptionLA:"ຫົວໜ່ວຍ", inputType:"text-area" },
                { id:6, descriptionLA:"ວິທີການກວດກາວັດແທກ", inputType:"text-area" },
              ],
            } , main_key : "542"
           },
          { classified: "title", code: "543",  descriptionEN: "", descriptionLA: "ການຕິດຕາມກວດກາແບບຕໍ່ເນື່ອງ (Continuous Emission Monitoring System/CEMs)", input_type: "choice",options: haveOrNoOptions },

        ],
        form550: [
          { classified: "heading", code: "550",  descriptionEN: "", descriptionLA: "ລະບົບບຳບັດນ້ຳເປື້ອນ", input_type: null },
          { classified: "sub_head", code: "550A",  descriptionEN: "", descriptionLA: "ໃບອະນຸຍາດກໍ່ສ້າງລະບົບບຳບັດ", input_type: "text", main_key : "550" },

          { classified: "sub_head", code: "550B",  descriptionEN: "", descriptionLA: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນ", input_type: null },
          { classified: "sub_head", code: "550B1",  descriptionEN: "", descriptionLA: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນຕົ້ນ", input_type: "multi-choice",options: firstStepTreatment, main_key : "550B" },
          { classified: "sub_head", code: "550B2",  descriptionEN: "", descriptionLA: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນທີ່ສອງ", input_type: "multi-choice",options: secondStepTreatment, main_key : "550B" },
          { classified: "sub_head", code: "550B3",  descriptionEN: "", descriptionLA: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນທີ່ສາມ", input_type: "multi-choice",options: thirdStepTreatment, main_key : "550B" },
          { classified: "sub_head", code: "550B4",  descriptionEN: "", descriptionLA: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນສຸດທ້າຍ", input_type: "multi-choice",options: lastStepTreatment, main_key : "550B" },

          { classified: "sub_head", code: "550C",  descriptionEN: "", descriptionLA: "ຂັ້ນຕອນລະອຽດການບຳບັດ (T5-10)", input_type: "T5-10", 
            column: {
              columnHead: [
                { id:1, descriptionLA:"ລະບົບບຳບັດເລກທີ", inputType:"text-area" },
                { id:2, descriptionLA:"ຊະນິດລະບົບບຳບັດ", inputType:"text-area" },
                { id:3, descriptionLA:"ຮູບແບບການເຮັດວຽກ", inputType:"text-area" },
                { id:4, descriptionLA:"ຄວາມສາມາດຂອງລະບົບ", inputType:"text-area" },
                { id:5, descriptionLA:"ປະລິມານໄຟຟ້າທີ່ໃຊ້", inputType:"text-area" },
              ],
            } , main_key : "550"
           },
          { classified: "sub_head", code: "550D",  descriptionEN: "", descriptionLA: "ຮູບແບບການເຮັດວຽກຂອງລະບົບບຳບັດ", input_type: "choice", main_key : "550"},
          { classified: "sub_head", code: "550E",  descriptionEN: "", descriptionLA: "ຄວາມສາມາດຂອງລະບົບບຳບັດນ້ຳ", input_type: "text", main_key : "550"},
          { classified: "sub_head", code: "550F",  descriptionEN: "", descriptionLA: "ການໃຊ້ສານເຄມີໃນລະບົບ (T5-11)", input_type: "T5-11", 
            column: {
              columnHead: [
                { id:1, descriptionLA:"ລຳດັບ", inputType:"No" },
                { id:2, descriptionLA:"ຊື່ສານເຄມີ", inputType:"text-area" },
                { id:3, descriptionLA:"ປະລິມານການໃຊ້", inputType:"text-area" },
                { id:4, descriptionLA:"ຄວາມຖີ່ການນຳໃຊ້", inputType:"text-area" },
                { id:5, descriptionLA:"ຈຸດປະສົງທີ່ນຳໃຊ້", inputType:"text-area" },
              ],
            } , main_key : "550"
           },
          { classified: "sub_head", code: "550G",  descriptionEN: "", descriptionLA: "ໝໍ້ວັດປະລິມານການນຳໃຊ້ໄຟຟ້າ", input_type: "choice", main_key : "550" },
          { classified: "sub_head", code: "550H",  descriptionEN: "", descriptionLA: "ປະລິມານໄຟຟ້າທີ່ໃຊ້ຕໍ່ເດືອນ", input_type: "text", main_key : "550" },
          { classified: "sub_head", code: "550I",  descriptionEN: "", descriptionLA: "ແຜນວາດຂັ້ນຕອນການບຳບັດ (Diagram) (P5-3)", input_type: "file-P", main_key : "550" },
          { classified: "sub_head", code: "550J",  descriptionEN: "", descriptionLA: "ແຜນຜັງລະບົບບຳບັດ (P5-4)", input_type: "file-P", main_key : "550" },
          { classified: "sub_head", code: "550K",  descriptionEN: "", descriptionLA: "ຮູບພາບລະບົບບຳບັດ (P5-5)", input_type: "file-P", main_key : "550" },
        ],
        form560: [
          { classified: "heading", code: "560",  descriptionEN: "", descriptionLA: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
          { classified: "sub_head", code: "560A",  descriptionEN: "", descriptionLA: "ໃບອະນຸຍາດປ່ອຍສານມົນລະພິດ (ນ້ຳເປື້ອນ) (D5-1)47", input_type: "file-D", main_key : "560" },
          { classified: "sub_head", code: "560B",  descriptionEN: "", descriptionLA: "ຜົນການວັດແທກນ້ຳໜ້າດິນ (D5-2)", input_type: "file-D", main_key : "560" },
          { classified: "sub_head", code: "560C",  descriptionEN: "", descriptionLA: "ຜົນການວັດແທກນ້ຳໃຕ້ດິນ (D5-3)", input_type: "file-D", main_key : "560" },
          { classified: "sub_head", code: "560D",  descriptionEN: "", descriptionLA: "ໃບອະນຸຍາດກໍ່ສ້າງລະບົບບຳບັດ (D5-4)", input_type: "file-D", main_key : "560" },
          { classified: "sub_head", code: "560E",  descriptionEN: "", descriptionLA: "ຜົນການວັດແທກປະສິດທິພາບຂອງລະບົບບຳບັດ (ນ້ຳເຂົ້າ-ນ້ຳອອກ) (D5-5)", input_type: "file-D", main_key : "560" },
        
        ]
      }
//************************************************** 600 ******************************************************************** */

      export const form600:any = {
        form610: [
            { classified: "heading", code: "610",  descriptionEN: "", descriptionLA: "ມົນລະພິດຈາກປ່ອງລະບາຍອາກາດ", input_type: null },
            { classified: "sub_head", code: "610A",  descriptionEN: "", descriptionLA: "ໃບອະນຸຍາດປ່ອຍສານມົນລະພິດ (ອາກາດ) ເລກທີ", input_type: "text" },
            { classified: "sub_head", code: "610B",  descriptionEN: "", descriptionLA: "ຈຳນວນປ່ອງລະບາຍອາກາດ", input_type: "number" },
            { classified: "sub_head", code: "610C",  descriptionEN: "", descriptionLA: "ປະລິມານການປ່ອຍລວມ (m3/ຊົ່ວໂມງ)", input_type: "number" },
            { classified: "sub_head", code: "610D",  descriptionEN: "", descriptionLA: "ແຫຼ່ງທີ່ມາຂອງມົນລະພິດຈາກປ່ອງລະບາຍອາກາດ (T6-1)", input_type: "T6-1", 
              column: {
                columnHead: [
                  { id:1, descriptionLA:"ລຳດັບ", inputType:"No" },
                  { id:2, descriptionLA:"ຂະບວນການ/ກິດຈະກຳ", inputType:"text-area" },
                  { id:3, descriptionLA:"ເຊື້ອໄຟທີ່ໃຊ້", inputType:"multi-choice" },
                  { id:4, descriptionLA:"ຮູບແບບການລະບາຍອາກາດ", inputType:"choice" },
                  { id:5, descriptionLA:"ປ່ອງປ່ອຍ ອາກາດເລກທີ", inputType:"text-area" },
                  { id:6, descriptionLA:"ມາດຕະການຄຸ້ມຄອງ", inputType:"multi-choice" },
                  { id:7, descriptionLA:"ວັດຖຸດິບ ຫຼື ສານເຄມີທີ່ໃຊ້ໃນຂະບວນການ", inputType:"text-area" },
                  { id:8, descriptionLA:"ມົນລະພິດທີ່ເກີດຂື້ນ", inputType:"text-area" },
                ],
                options:[
                  { forID:3, options: fuelUsedOptions},
                  { forID:4, options: ventilationPatternOptions},
                  { forID:6, options: protectionStandardsOptions},
                ]
              }   },
            { classified: "sub_head", code: "610E",  descriptionEN: "", descriptionLA: "ແຜນວາດການເກີດມົນລະພິດທາງອາກາດໃນຂະບວນການ (P6-1)", input_type: "file-P" },
            { classified: "sub_head", code: "610F",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນປ່ອງລະບາຍອາກາດ (T6-2)", input_type: "T6-2", 
              column: {
                columnHead: [
                  { id:1, descriptionLA:"ປ່ອງປ່ອຍ ອາກາດເລກທີ", inputType:"text-area" },
                  { id:2, descriptionLA:"ຊື່ປ່ອງ ລະບາຍອາກາດ", inputType:"text-area" },
                  { id:3, descriptionLA:"ພິກັດ GPS", inputType:"text-area" },
                  { id:4, descriptionLA:"ລັກສະນະປ່ອງ (Shape)", inputType:"multi-choice" },
                  { id:5, descriptionLA:"ພື້ນທີ່ໜ້າຕັດ (m2)", inputType:"text-area" },
                  { id:6, descriptionLA:"ຄວາມສູງ (m)", inputType:"text-area" },
                  { id:7, descriptionLA:"ຄວາມຖີ່ ໃນການປ່ອຍ", inputType:"text-area" },
                  { id:8, descriptionLA:"ຂະບວນການ/ກິດຈະກຳ", inputType:"text-area" },
                  { id:9, descriptionLA:"ການກວດກາ ວັດແທກ", inputType:"choice" },
                  { id:10, descriptionLA:"ໝາຍເຫດ", inputType:"text-area" },
                ],
                options:[
                  { forID:9, options: haveOrNoOptions},
                ]
              }    },
            { classified: "sub_head", code: "610G",  descriptionEN: "", descriptionLA: "ແຜນຜັງຕິດຕັ້ງພັດລົມ ແລະ ລະບົບລະບາຍອາກາດ (P6-2)", input_type: "P6-2" },
          ],
          form620: [
            { classified: "heading", code: "620",  descriptionEN: "", descriptionLA: "ມົນລະພິດໃນສະຖານທີ່ເຮັດວຽກ", input_type: null },
            { classified: "sub_head", code: "620A",  descriptionEN: "", descriptionLA: "ຈຳນວນແຫຼ່ງມົນລະພິດໃນສະຖານທີ່ເຮັດວຽກ", input_type: "number" },
            { classified: "sub_head", code: "620B",  descriptionEN: "", descriptionLA: "ແຫຼ່ງທີ່ມາຂອງມົນລະພິດໃນສະຖານທີ່ເຮັດວຽກ (T6-3)", input_type: "T6-3", 
              column: {
                columnHead: [
                  { id:1, descriptionLA:"ລຳດັບ", inputType:"No" },
                  { id:2, descriptionLA:"ສະຖານທີ່/ຂະບວນການທີ່ເຮັດໃຫ້ເກີດມົນລະພິດ", inputType:"text-area" },
                  { id:3, descriptionLA:"ວັດຖຸດິບ ຫຼື ສານເຄມີທີ່ໃຊ້ໃນຂະບວນການ", inputType:"text-area" },
                  { id:4, descriptionLA:"ປະເພດມົນລະພິດທີ່ເກີດຂື້ນ", inputType:"text-area" },
                  { id:5, descriptionLA:"ມາດຕະຖານຄຸ້ມຄອງ", inputType:"text-area" },
                  { id:6, descriptionLA:"ການກວດກາວັດແທກ", inputType:"choice" },
                  { id:7, descriptionLA:"ໝາຍເຫດ", inputType:"text-area" },
                ],
                options:[
                  { forID:6, options: haveOrNoOptions},
                ]
              }    },
            { classified: "sub_head", code: "620C",  descriptionEN: "", descriptionLA: "ແຜນວາດການເກີດມົນລະພິດທາງອາກາດໃນຂະບວນການ (P6-3)", input_type: "file-P" },
          ],
          form630: [
            { classified: "heading", code: "630",  descriptionEN: "", descriptionLA: "ຄຸນນະພາບອາກາດໃນບັນຍາກາດ ກ່ອນດຳເນີນກິດຈະການ", input_type: null },
            { classified: "sub_head", code: "630A",  descriptionEN: "", descriptionLA: "ຈຳນວນຈຸດເກັບຕົວຢ່າງຄຸນນະພາບອາກາດ ກ່ອນດຳເນີນກິດຈະການ", input_type: "number" },
            { classified: "sub_head", code: "630B",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນຈຸດກວດກາວັດແທກຄຸນນະພາບອາກາດ ກ່ອນດຳເນີນກິດຈະການ (T6-4)", input_type: "T6-4", 
              column: {
                columnHead: [
                  { id:1, descriptionLA:"ລຳດັບ", inputType:"No" },
                  { id:2, descriptionLA:"ຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                  { id:3, descriptionLA:"ລາຍລະອຽດຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                  { id:4, descriptionLA:"ພິກັດ GPS", inputType:"text-area" },
                ],
              }  },
          ],
          form640: [
            { classified: "heading", code: "640",  descriptionEN: "", descriptionLA: "ການຕິດຕາມກວດກາຄຸນນະພາບອາກາດ", input_type: null },
            { classified: "title", code: "641",  descriptionEN: "", descriptionLA: "ການຕິດຕາມກວດກາອາກາດໃນບັນຍາກາດອ້ອມຂ້າງ", input_type: null },
            { classified: "sub_head", code: "641A",  descriptionEN: "", descriptionLA: "ຈຳນວນຈຸດຕິດຕາມກວດກາ", input_type: "number" },
            { classified: "sub_head", code: "641B",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນຈຸດຕິດຕາມກວດກາອາກາດໃນບັນຍາກາດອ້ອມຂ້າງ (T6-5)", input_type: "T6-5", 
              column: {
                columnHead: [
                  { id:1, descriptionLA:"ຈຸດກວດກາເລກທີ", inputType:"text-area" },
                  { id:2, descriptionLA:"ລາຍລະອຽດຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                  { id:3, descriptionLA:"ຄວາມຖີ່ໃນການກວດກາ", inputType:"text-area" },
                  { id:4, descriptionLA:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
                ],
              }  },
            { classified: "sub_head", code: "641C",  descriptionEN: "", descriptionLA: "ມາດຕະຖານຄວບຄຸມອາກາດໃນບັນຍາກາດອ້ອມຂ້າງ (T6-6)", input_type: "T6-6", 
              column: {
                columnHead: [
                  { id:1, descriptionLA:"ລຳດັບ", inputType:"No" },
                  { id:2, descriptionLA:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
                  { id:3, descriptionLA:"ສັນຍາລັກ", inputType:"text-area" },
                  { id:4, descriptionLA:"ມາດຕະຖານຄວບຄຸມ", inputType:"text-area" },
                  { id:5, descriptionLA:"ຫົວໜ່ວຍ", inputType:"text-area" },
                  { id:6, descriptionLA:"ວິທີການກວດກາວັດແທກ", inputType:"text-area" },
                  { id:7, descriptionLA:"ແຫຼ່ງທີ່ມາຂອງມາດຕະຖານ", inputType:"text-area" },
                ],
              }     },
            
            { classified: "title", code: "642",  descriptionEN: "", descriptionLA: "ການຕິດຕາມກວດກາອາກາດຈາກປ່ອງອາກາດ", input_type: null },
            { classified: "sub_head", code: "642A",  descriptionEN: "", descriptionLA: "ຈຳນວນຈຸດຕິດຕາມກວດກາ", input_type: "number" },
            { classified: "sub_head", code: "642B",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນຈຸດຕິດຕາມກວດກາອາກາດຈາກປ່ອງລະບາຍອາກາດ (T6-7)", input_type: "T6-7", 
              column: {
                columnHead: [
                  { id:1, descriptionLA:"ຈຸດກວດກາເລກທີ", inputType:"text-area" },
                  { id:2, descriptionLA:"ປ່ອງລະບາຍອາກາດເລກທີ", inputType:"text-area" },
                  { id:3, descriptionLA:"ຄວາມຖີ່ໃນການກວດກາ", inputType:"text-area" },
                  { id:4, descriptionLA:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
                ],
              }    },
            { classified: "sub_head", code: "642C",  descriptionEN: "", descriptionLA: "ມາດຕະຖານຄວບຄຸມອາກາດຈາກປ່ອງລະບາຍອາກາດ (T6-8)", input_type: "T6-8" },
            
            { classified: "title", code: "643",  descriptionEN: "", descriptionLA: "ການຕິດຕາມກວດກາອາກາດໃນສະຖານທີ່ເຮັດວຽກ", input_type: null },
            { classified: "sub_head", code: "643A",  descriptionEN: "", descriptionLA: "ຈຳນວນຈຸດຕິດຕາມກວດກາ", input_type: "number" },
            { classified: "sub_head", code: "643B",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນຈຸດຕິດຕາມກວດກາອາກາດໃນສະຖານທີ່ເຮັດວຽກ (T6-9)", input_type: "T6-9" },
            { classified: "sub_head", code: "643C",  descriptionEN: "", descriptionLA: "ມາດຕະຖານຄວບຄຸມອາກາດໃນສະຖານທີ່ເຮັດວຽກ (T6-10)", input_type: "T6-10" },

            { classified: "sub_head", code: "644",  descriptionEN: "", descriptionLA: "ການຕິດຕາມກວດກາແບບຕໍ່ເນື່ອງ", input_type: "choice", options: haveOrNoOptions },
  
          ],
          form650: [
            { classified: "heading", code: "650",  descriptionEN: "", descriptionLA: "ລະບົບບຳບັດອາກາດ", input_type: null },
            { classified: "sub_head", code: "650A",  descriptionEN: "", descriptionLA: "ໃບອະນຸຍາດກໍ່ສ້າງລະບົບບຳບັດ ເລກທີ", input_type: "text" },
            { classified: "sub_head", code: "650B",  descriptionEN: "", descriptionLA: "ຈຳນວນລະບົບບຳບັດ", input_type: "number" },
            { classified: "sub_head", code: "650C",  descriptionEN: "", descriptionLA: "ຂໍ້ມູນລະບົບບຳບັດ (T6-11)", input_type: "T6-11" },
            { classified: "sub_head", code: "650D",  descriptionEN: "", descriptionLA: "ຂັ້ນຕອນການບຳບັດ (T6-12)", input_type: "T6-12" },
            { classified: "sub_head", code: "650E",  descriptionEN: "", descriptionLA: "ການໃຊ້ສານເຄມີໃນລະບົບ (T6-13)", input_type: "T6-13" },
            { classified: "sub_head", code: "650F",  descriptionEN: "", descriptionLA: "ໝໍ້ວັດປະລິມານການນຳໃຊ້ໄຟຟ້າ", input_type: "choice", options: haveOrNoOptions },
            { classified: "sub_head", code: "650G",  descriptionEN: "", descriptionLA: "ແຜນວາດຂັ້ນຕອນການບຳບັດ (Diagram) (P6-4)", input_type: "file-P" },
            { classified: "sub_head", code: "650H",  descriptionEN: "", descriptionLA: "ແຜນຜັງລະບົບບຳບັດ (P6-5)", input_type: "file-P" },
            { classified: "sub_head", code: "650I",  descriptionEN: "", descriptionLA: "ຮູບພາບລະບົບບຳບັດ (P6-6)", input_type: "file-P" },
  
          ],
          form660: [
            { classified: "heading", code: "660",  descriptionEN: "", descriptionLA: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
            { classified: "sub_head", code: "660A",  descriptionEN: "", descriptionLA: "ໃບອະນຸຍາດປ່ອຍສານມົນລະພິດ (ອາກາດ) (D6-1)", input_type: "file-D" },
            { classified: "sub_head", code: "660B",  descriptionEN: "", descriptionLA: "ຜົນການກວດກາວັດແທກອາກາດໃນບັນຍາກາດກ່ອນດຳເນິນກິດຈະການ (D6-2)", input_type: "file-D" },
            { classified: "sub_head", code: "660C",  descriptionEN: "", descriptionLA: "ໃບອະນຸຍາດກໍ່ສ້າງລະບົບບຳບັດ (D6-3)", input_type: "file-D" },
            { classified: "sub_head", code: "660D",  descriptionEN: "", descriptionLA: "ຜົນການວັດແທກປະສິດທິພາບຂອງລະບົບບຳບັດ (D6-4)", input_type: "file-D" }
          ]
        }