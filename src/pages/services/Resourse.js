import reception from '@/assets/images/services/reception.png';
import care from '@/assets/images/services/care.png';
import breakzone from '@/assets/images/services/break.png';
import services1 from '@/assets/images/home/services1.png';
import services2 from '@/assets/images/home/services2.png';
import services3 from '@/assets/images/home/services3.png';
import services4 from '@/assets/images/home/services4.png';
import services5 from '@/assets/images/home/services5.png';

export const bannerData = [
    {
      id:1,
      title:'臉部清潔保養',
      description:[
        '給肌膚一次深層的清新洗禮，',
        '告別老廢角質與暗沉，',
        '讓肌膚重現細緻柔嫩。'
      ],
      img:services1
    },
    {
      id:2,
      title:'全身按摩',
      description:[
        '舒緩疲勞、放鬆心靈，',
        '讓身體感受全方位的呵護與滋養。',
      ],
      img:services2
    },
    {
      id:3,
      title:'霧眉',
      description:[
        '自然柔霧效果，',
        '打造專屬於您的眉型，',
        '輕鬆擁有完美眉妝。'
      ],
      img:services3
    },
    {
      id:4,
      title:'眼線',
      description:[
        '明亮雙眸的秘密，',
        '打造深邃迷人的眼神。',
      ],
      img:services4
    },
    {
      id:5,
      title:'繡唇',
      description:[
        '讓雙唇自然飽滿，',
        '增添一抹健康色彩，',
        '綻放自信微笑。'
      ],
      img:services5
    }
  ];

 export const zonePicData ={
  reception:[reception,breakzone],
  breakZone:[breakzone,breakzone],
  care : [care,care]
 };
  
 export const faqData =
 {
     reservation: [
         {
             question: '如何進行預約？',
             answer: '您可以透過以下方式完成預約：官網預約：進入我們的官方網站，選擇心儀的服務，點選「立即預約」，依序選擇服務時間與人數，並完成付款即可。電話預約：撥打客服熱線，由專人協助您確認時間與服務內容。',
             target:'collapseOne'
         },
         {
             question: '是否能修改預約內容？',
             answer: '是的，您可以在預約時間24小時前登入帳戶，於「我的預約」頁面修改時間、服務或人數。如需進一步協助，請聯繫客服。',
             target:'collapseTwo'
         },
         {
             question: '如果臨時無法前來該怎麼辦？',
             answer: '若臨時無法到場，請儘速聯繫客服協助取消或重新安排時間。請注意：24小時前取消：全額退款。24小時內取消：收取預約金額的50% 作為取消費用。 未到場(No- show)：恕不退款。',
             target:'collapseThree'
         }

     ],
     pay: [
         {
             question: '支援哪些支付方式？',
             answer: '我們提供以下安全便捷的支付方式：1.信用卡/金融卡：支援Visa、MasterCard、JCB等多家卡別。2.行動支付：包括Apple Pay、Google Pay、Line Pay等。3.線上銀行轉帳：提供多家合作銀行轉帳服務，需於預約完成後上傳支付憑證。',
             target:'collapseOne'
         },
         {
             question: '如果預約失敗但款項已扣，該怎麼辦？',
             answer: '若系統故障或操作中斷導致預約未成功，請聯繫客服提供以下資訊：1.預約嘗試時間2.扣款相關證明（如交易記錄截圖）我們將於 3-5個工作日 內確認並將款項退回您的支付方式。',
             target:'collapseTwo'

         },
         {
             question: '退款需要多久？',
             answer: '成功申請退款後，款項將於以下時間內退回：1.信用卡/金融卡：3-7個工作日2.行動支付/銀行轉帳：1-3個工作日若超過預估時間仍未收到款項，請聯繫支付平台或銀行查詢。',
             target:'collapseThree'

         }
     ],
     recommendation:[
         {
             question: '療程前需要做哪些準備？',
             answer: '1.臉部清潔保養：療程前一天避免使用含酸類的產品（如果酸、A酸），以降低皮膚敏感風險。2.全身按摩：療程當天建議穿著輕便舒適的衣物，並保持足夠的水分補充。3.霧眉、眼線、繡唇：前一天請勿使用化妝品於相關部位，並避免過度日曬，以保持皮膚穩定狀態。',
             target:'collapseOne'
         },
         {
             question: '療程後有哪些注意事項？',
             answer: '1.臉部清潔保養：療程後避免長時間曝曬陽光，並加強使用防曬霜。減少使用刺激性護膚品，保持清爽與保濕即可。2.全身按摩：按摩後建議飲用溫水以促進新陳代謝。避免當天進行劇烈運動，讓身體充分休息。3.霧眉、眼線、繡唇：請按照術後提供的專業護理說明進行保養，避免觸摸、擦拭或剝落結痂。保持患處乾燥，避免直接碰水或化妝。',
             target:'collapseTwo'
         },
         {
             question: '什麼情況下不建議進行療程？',
             answer: '1.懷孕或哺乳期間的女性，建議諮詢醫生後再決定是否進行美容療程。2.有皮膚病、傷口或發炎症狀者，建議延後至痊癒後進行相關療程。3.若有特殊過敏史或服用藥物，請提前告知專業人員以進行評估。',
             target:'collapseThree'
         }
     ]
 };