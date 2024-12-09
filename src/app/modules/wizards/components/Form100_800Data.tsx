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
      { classified: "sub_head", code: "110F1", description: "ບ້ານ", input_type: "choice", options: villageOptions, },
      { classified: "sub_head", code: "110F2", description: "ເມືອງ", input_type: "choice", options: districtOptions,  },
      { classified: "sub_head", code: "110F3", description: "ແຂວງ", input_type: "choice", options: provinceOptions,  },
      { classified: "sub_head", code: "110F4", description: "ເຂດເສດຖະກິດພິເສດ", input_type: "choice", options: specialAreaOptions  },
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
      { classified: "sub_head", code: "140I", description: "ຊຸດເອກະສານປະຈຳຕົວວິຊາການຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ເຄມີປະຈຳໂຮງງານ (D1-9)", input_type: "file-D", main_key : "140" },
      { classified: "sub_head", code: "140J", description: "ຊຸດເອກະສານປະຈຳຕົວພະນັກງານຮັບຜິດຊອບດ້ານຄວາມປອດໄພ (D1-10)", input_type: "file-D", main_key : "140" },
    ],
  };

export const form200:any = {
    form210: [
        { classified: "heading", code: "200", description: "ທີ່ຕັ້ງຂອງໂຮງງານ", input_type: null },
        { classified: "title", code: "210A", description: "ທີ່ຕັ້ງໂຮງງານ", input_type: null },
        { classified: "sub_head", code: "210A1", description: "ຖະໜົນ", input_type: "text" },
        { classified: "sub_head", code: "210A2", description: "ບ້ານ", input_type: "choice", options: provinceOptions },
        { classified: "sub_head", code: "210A3", description: "ເມືອງ", input_type: "choice", options: districtOptions },
        { classified: "sub_head", code: "210A4", description: "ແຂວງ", input_type: "choice", options: villageOptions },
        { classified: "sub_head", code: "210A5", description: "ເຂດເສດຖະກິດພິເສດ", input_type: "choice", options: specialAreaOptions },
      
        { classified: "title", code: "210B", description: "ແຜນທີ່ໂຮງງານ", input_type: "file-P" },
        { classified: "title", code: "210C", description: "ຕຳແໜ່ງພິກັດ GPS (ລະບົບ UTM)", input_type: "text" },
        { classified: "sub_head", code: "210C1", description: "Zone", input_type: "text" },
        { classified: "sub_head", code: "210C2", description: "ພິກັດ Easting: E", input_type: "text" },
        { classified: "sub_head", code: "210C3", description: "ພິກັດ Northing: N", input_type: "text" },
      ],
      form220: [
        { classified: "heading", code: "220", description: "ສະພາບພື້ນທີ່ອ້ອມຂ້າງໂຮງງານ", input_type: null },
        { classified: "title", code: "220A", description: "ພື້ນທີ່ຕິດກັບໂຮງງານ", input_type: null },
        { classified: "sub_head", code: "220A1", description: "ທິດເໜືອ", input_type: "text" },
        { classified: "sub_head", code: "220A2", description: "ທິດໃຕ້", input_type: "text" },
        { classified: "sub_head", code: "220A3", description: "ທິດຕາເວັນອອກ", input_type: "text" },
        { classified: "sub_head", code: "220A4", description: "ທິດຕາເວັນຕົກ", input_type: "text" },
  
        { classified: "title", code: "220B", description: "ແຜນຜັງສະແດງໃຫ້ເຫັນທີ່ຕັ້ງໂຮງງານ ໃນຂອບເຂດລັດສະໝີ 500 ແມັດ", input_type: "file-P" },
        { classified: "title", code: "220C", description: "ພື້ນທີ່ອ້ອມຂ້າງໂຮງງານ ", input_type: null },
        { classified: "sub_head", code: "220C1", description: "ຊຸມຊົນ", input_type: "text" },
        { classified: "sub_head", code: "220C2", description: "ແຫຼ່ງນໍ້າ", input_type: "text" },
        { classified: "sub_head", code: "220C3", description: "ໂຮງຮຽນ", input_type: "text" },
        { classified: "sub_head", code: "220C4", description: "ໂຮງໝໍ ຫຼື ສຸກສາລາ", input_type: "text" },
        { classified: "sub_head", code: "220C5", description: "ວັດວາອາຮາມ", input_type: "text" },
        { classified: "sub_head", code: "220C6", description: "ສະຖານທີ່ປະຫວັດສາດ ຫຼື ບູຮານວັດຖຸ", input_type: "text" },
        { classified: "sub_head", code: "220C7", description: "ເຂດອະນຸລັກຊີວະນານາພັນ", input_type: "text" },
        { classified: "sub_head", code: "220C8", description: "ແຫຼ່ງທ່ອງທ່ຽວ", input_type: "text" },
        { classified: "sub_head", code: "220C9", description: "ອື່ນໆ (ລະບຸ)", input_type: "text" },
      ],
      form230: [
        { classified: "heading", code: "230", description: "ການນຳໃຊ້ພື້ນທີ່, ອາຄານ ແລະ ສິ່ງປຸກສ້າງພາຍໃນໂຮງງານ", input_type: null },
        { classified: "title", code: "231", description: "ເນື້ອທີ່ ແລະ ການນຳໃຊ້ພື້ນທີ່", input_type: null },
        { classified: "sub_head", code: "231A", description: "ເນື້ອທີ່ທັງໝົດ (ຕາແມັດ)", input_type: "number" },
        { classified: "sub_head", code: "231B", description: "ພື້ນທີ່ສີຂຽວ (ສ່ວນຮ້ອຍ)", input_type: "number" },
        { classified: "sub_head", code: "231C", description: "ການນຳໃຊ້ພື້ນທີ່", input_type: "T2-1", column:{columnHead:[{id:1, title:"ລຳດັບ", inputType:"No"},{id:2, title:"ຊື່ພື້ນທີ່", inputType:"text-area" },{id:3, title:"ເນື້ອທີ່ (ຕາແມັດ)", inputType:"text-area" },{id:4, title:"ສ່ວນຮ້ອຍ", inputType:"text-area" },{id:5, title:"ໝາຍເຫດ", inputType:"text-area" }] }},
        { classified: "sub_head", code: "231D", description: "ແຜນຜັງການນຳໃຊ້ພື້ນທີ່", input_type: "file-P" },
      
        { classified: "title", code: "232", description: "ອາຄານ ແລະ ສິ່ງປຸກສ້າງ", input_type: null },
        { classified: "sub_head", code: "232A", description: "ຈຳນວນອາຄານ ແລະ ສິ່ງປຸກສ້າງ", input_type: "text" },
        { classified: "sub_head", code: "232B", description: "ຂໍ້ມູນອາຄານ ແລະ ສິ່ງແວດລ້ອມ", input_type: "T2-2", column:{columnHead:[{id:1, title:"ລຳດັບ", inputType:"No"},{id:2, title:"ຊື່ອາຄານ", inputType:"text-area" },{id:3, title:"ລັກສະນະອາຄານ", inputType:"text-area" },{id:4, title:"ຂະໜາດອາຄານ", inputType:"text-area" },{id:5, title:"ການນຳໃຊ້/ການນຳໃຊ້ສະເພາະ", inputType:"text-area" }] }, },
        { classified: "sub_head", code: "232C", description: "ໃບອະນຸຍາດປຸກສ້າງໂຮງງານ ເລກທີ", input_type: "text" },
      
        { classified: "title", code: "232D", description: "ແຜນຜັງການກໍ່ສ້າງ ແລະ ລະບົບເຕັກນິກໂຮງງານ", input_type: null },
        { classified: "sub_head", code: "232D1", description: "ແຜນຜັງສະແດງສິ່ງປຸກສ້າງໃນບໍລິເວນໂຮງງານ", input_type: "file-P" },
        { classified: "sub_head", code: "232D2", description: "ແຜນຜັງກໍ່ສ້າງອາຄານຜະລິດ (ຮູບດ້ານໜ້າ, ຂ້າງ, ຫຼັງ ແລະ ຮູບຕັດ)", input_type: "file-P" },
        { classified: "sub_head", code: "232D3", description: "ແຜນຜັງການກໍ່ສ້າງສາງເກັບມ້ຽນເຄມີ", input_type: "file-P" },
      ],
      form240: [
        { classified: "heading", code: "240", description: "ອາຄານ ແລະ ພື້ນທີ່ຄວບຄຸມ ", input_type: null },
        { classified: "sub_head", code: "240A", description: "ຫ້ອງເກັບສານເຄມີ", input_type: "text" },
        { classified: "sub_head", code: "240B", description: "ຫ້ອງເກັບສິ່ງເສດເຫຼືອເຄມີ", input_type: "text" },
        { classified: "sub_head", code: "240C", description: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບວັດຖຸດິບ", input_type: "text" },
        { classified: "sub_head", code: "240D", description: "ອາຄານ ຫຼື ພື້ນທີ່ເກັບເຊື້ອໄຟ", input_type: "text" },
      ],
      form250: [
        { classified: "heading", code: "250", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
        { classified: "sub_head", code: "250A", description: "ໃບອະນຸຍາດນຳໃຊ້ທີ່ດິນ", input_type: "text" },
        { classified: "sub_head", code: "250B", description: "ໃບອະນຸຍາດປຸກສ້າງໂຮງງານ", input_type: "text" },
        { classified: "sub_head", code: "250C", description: "ໃບອະນຸຍາດສ້າງສາງເກັບມ້ຽນເຄມີ", input_type: "text" },
      ]
    }


    export const form500:any = {
      form510: [
          { classified: "heading", code: "500", description: "ການປ່ອຍນ້ຳເປື້ອນ", input_type: null },
          { classified: "sub_head", code: "510A", description: "ໃບອະນຸຍາດປ່ອຍສານມົນລະພິດ (ນ້ຳເປື້ອນ) ເລກທີ", input_type: "text" },
          { classified: "sub_head", code: "510B", description: "ຈຳນວນຈຸດປ່ອຍນ້ຳເປື້ອນ", input_type: "number" },
          { classified: "sub_head", code: "510C", description: "ປະລິມານການປ່ອຍລວມ (m3/ວັນ)", input_type: "number" },
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
        }
           },
          { classified: "sub_head", code: "510E", description: "ການລະບາຍນ້ຳພາຍໃນໂຮງງານ (P5-1)", input_type: "file-P" },
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
            } },
          { classified: "title", code: "522", description: "ແຫຼ່ງທີ່ມາຂອງນ້ຳເປື້ອນຈາກການຜະລິດ ແລະ ການຄຸ້ມຄອງ", input_type: null },
          { classified: "sub_head", code: "522A", description: "ແຫຼ່ງທີ່ມາຂອງນ້ຳເປື້ອນຈາກການຜະລິດ (T5-3)", input_type: "T5-3" , 
            column: {
              columnHead: [
                { id:1, title:"ລຳດັບ", inputType:"No" },
                { id:2, title:"ຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                { id:3, title:"ໝາຍເຫດ", inputType:"text-area" },
              ],
            } },
          { classified: "sub_head", code: "522B", description: "ແຜນຜັງການເກີດນ້ຳເປື້ອນໃນຂະບວນການ (P5-2)", input_type: "file-P" },
        ],
        form530: [
          { classified: "heading", code: "530", description: "ຄຸນນະພາບນ້ຳກ່ອນດຳເນີນກິດຈະການ", input_type: null },
          { classified: "title", code: "531", description: "ຄຸນນະພາບນ້ຳໜ້າດິນກ່ອນດຳເນີນກິດຈະການ", input_type: null },
          { classified: "sub_head", code: "531A", description: "ຈຳນວນຈຸດເກັບຕົວຢ່າງນ້ຳໜ້າດິນກ່ອນດຳເນີນກິດຈະການ", input_type: "number" },
          { classified: "sub_head", code: "531B", description: "ຂໍ້ມູນຈຸດກວດກາວັດແທກ (T5-4)", input_type: "T5-4", 
            column: {
              columnHead: [
                { id:1, title:"ລຳດັບ", inputType:"No" },
                { id:2, title:"ຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                { id:3, title:"ພິກັດ gps", inputType:"text-area" },
                { id:4, title:"ໝາຍເຫດ", inputType:"text-area" },
              ],
            } 
           },

          { classified: "title", code: "532", description: "ຄຸນນະພາບນ້ຳໃຕ້ດິນກ່ອນດຳເນີນກິດຈະການ", input_type: null },
          { classified: "sub_head", code: "532A", description: "ຈຳນວນຈຸດເກັບຕົວຢ່າງນ້ຳໃຕ້ດິນກ່ອນດຳເນີນກິດຈະການ", input_type: null },
          { classified: "sub_head", code: "532B", description: "ຂໍ້ມູນຈຸດກວດກາວັດແທກນ້ຳໃຕ້ດິນກ່ອນດຳເນີນກິດຈະການ (T5-5)", input_type: "T5-5", 
            column: {
              columnHead: [
                { id:1, title:"ລຳດັບ", inputType:"No" },
                { id:2, title:"ຈຸດເກັບຕົວຢ່າງ", inputType:"text-area" },
                { id:3, title:"ພິກັດ gps", inputType:"text-area" },
                { id:4, title:"ໝາຍເຫດ", inputType:"text-area" },
              ],
            } 
           },
        ],
        form540: [
          { classified: "heading", code: "540", description: "ການຕິດຕາມກວດກາຄຸນນະພາບນ້ຳ", input_type: null },
          { classified: "title", code: "541", description: "ການຕິດຕາມກວດການ້ຳເປື້ອນ", input_type: null },
          { classified: "sub_head", code: "541A", description: "ຈຳນວນຈຸດຕິດຕາມກວດການ້ຳເປື້ອນ", input_type: "text" },
          { classified: "sub_head", code: "541B", description: "ຂໍ້ມູນຈຸດຕິດຕາມກວດການ້ຳເປື້ອນ (T5-6)", input_type: "T5-6", 
            column: {
              columnHead: [
                { id:1, title:"ຈຸດກວດກາເລກທີ", inputType:"text-area" },
                { id:2, title:"ລາຍລະອຽດຈຸດເກັບຢ່າງ", inputType:"text-area" },
                { id:3, title:"ຄວາມຖີ່ໃນການກວດກາ", inputType:"text-area" },
                { id:4, title:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
              ],
            } 
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
            } 
           },
          
          { classified: "title", code: "542", description: "ການຕິດຕາມກວດກາຄຸນນະພາບນ້ຳໃຕ້ດິນ", input_type: null },
          { classified: "sub_head", code: "542A", description: "ຈຳນວນຈຸດຕິດຕາມກວດການ້ຳໃຕ້ດິນ", input_type: "text" },
          { classified: "sub_head", code: "542B", description: "ຂໍ້ມູນຈຸດຕິດຕາມກວດການ້ຳໃຕ້ດິນ (T5-8)", input_type: "T5-8", 
            column: {
              columnHead: [
                { id:1, title:"ຈຸດກວດກາເລກທີ", inputType:"No" },
                { id:2, title:"ລາຍລະອຽດຈຸດເກັບຢ່າງ", inputType:"text-area" },
                { id:3, title:"ຄວາມຖີ່ໃນການກວດກາ", inputType:"text-area" },
                { id:4, title:"ຕົວຊີ້ວັດ (ພາລາມິເຕີ້)", inputType:"text-area" },
              ],
            } 
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
            }  },
          { classified: "title", code: "543", description: "ການຕິດຕາມກວດກາແບບຕໍ່ເນື່ອງ (Continuous Emission Monitoring System/CEMs)", input_type: "choice",options: haveOrNoOptions },

        ],
        form550: [
          { classified: "heading", code: "550", description: "ລະບົບບຳບັດນ້ຳເປື້ອນ", input_type: null },
          { classified: "sub_head", code: "550A", description: "ໃບອະນຸຍາດກໍ່ສ້າງລະບົບບຳບັດ", input_type: "text" },
          { classified: "sub_head", code: "550B", description: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນ", input_type: null },


          { classified: "sub_head", code: "550B1", description: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນຕົ້ນ", input_type: "multi-choice",options: firstStepTreatment },
          { classified: "sub_head", code: "550B2", description: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນທີ່ສອງ", input_type: "multi-choice",options: secondStepTreatment },
          { classified: "sub_head", code: "550B3", description: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນທີ່ສາມ", input_type: "multi-choice",options: thirdStepTreatment },
          { classified: "sub_head", code: "550B4", description: "ຂັ້ນຕອນການບຳບັດນ້ຳເປື້ອນຂັ້ນສຸດທ້າຍ", input_type: "multi-choice",options: lastStepTreatment },
          { classified: "sub_head", code: "550C", description: "ຂັ້ນຕອນລະອຽດການບຳບັດ (T5-10)", input_type: "T5-10", 
            column: {
              columnHead: [
                { id:1, title:"ລະບົບບຳບັດເລກທີ", inputType:"text-area" },
                { id:2, title:"ຊະນິດລະບົບບຳບັດ", inputType:"text-area" },
                { id:3, title:"ຮູບແບບການເຮັດວຽກ", inputType:"text-area" },
                { id:4, title:"ຄວາມສາມາດຂອງລະບົບ", inputType:"text-area" },
                { id:5, title:"ປະລິມານໄຟຟ້າທີ່ໃຊ້", inputType:"text-area" },
              ],
            }  },
          { classified: "sub_head", code: "550D", description: "ຮູບແບບການເຮັດວຽກຂອງລະບົບບຳບັດ", input_type: "choice" },
          { classified: "sub_head", code: "550E", description: "ຄວາມສາມາດຂອງລະບົບບຳບັດນ້ຳ", input_type: "text"},
          { classified: "sub_head", code: "550F", description: "ການໃຊ້ສານເຄມີໃນລະບົບ (T5-11)", input_type: "T5-11", 
            column: {
              columnHead: [
                { id:1, title:"ລຳດັບ", inputType:"No" },
                { id:2, title:"ຊື່ສານເຄມີ", inputType:"text-area" },
                { id:3, title:"ປະລິມານການໃຊ້", inputType:"text-area" },
                { id:4, title:"ຄວາມຖີ່ການນຳໃຊ້", inputType:"text-area" },
                { id:5, title:"ຈຸດປະສົງທີ່ນຳໃຊ້", inputType:"text-area" },
              ],
            }  },
          { classified: "sub_head", code: "550G", description: "ໝໍ້ວັດປະລິມານການນຳໃຊ້ໄຟຟ້າ", input_type: "choice" },
          { classified: "sub_head", code: "550H", description: "ປະລິມານໄຟຟ້າທີ່ໃຊ້ຕໍ່ເດືອນ", input_type: "text" },
          { classified: "sub_head", code: "550I", description: "ແຜນວາດຂັ້ນຕອນການບຳບັດ (Diagram) (P5-3)", input_type: "file-P" },
          { classified: "sub_head", code: "550J", description: "ແຜນຜັງລະບົບບຳບັດ (P5-4)", input_type: "file-P" },
          { classified: "sub_head", code: "550K", description: "ຮູບພາບລະບົບບຳບັດ (P5-5)", input_type: "file-P" },
        ],
        form560: [
          { classified: "heading", code: "560", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
          { classified: "sub_head", code: "560A", description: "ໃບອະນຸຍາດປ່ອຍສານມົນລະພິດ (ນ້ຳເປື້ອນ) (D5-1)47", input_type: "file-D" },
          { classified: "sub_head", code: "560B", description: "ຜົນການວັດແທກນ້ຳໜ້າດິນ (D5-2)", input_type: "file-D" },
          { classified: "sub_head", code: "560C", description: "ຜົນການວັດແທກນ້ຳໃຕ້ດິນ (D5-3)", input_type: "file-D" },
          { classified: "sub_head", code: "560D", description: "ໃບອະນຸຍາດກໍ່ສ້າງລະບົບບຳບັດ (D5-4)", input_type: "file-D" },
          { classified: "sub_head", code: "560E", description: "ຜົນການວັດແທກປະສິດທິພາບຂອງລະບົບບຳບັດ (ນ້ຳເຂົ້າ-ນ້ຳອອກ) (D5-5)", input_type: "file-D" },
        
        ]
      }

   