// data8html2.js
window.html2Content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flow charts</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.6.1/mermaid.min.js"></script>
<style>
    /* General Styles */
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  margin: 0;
  padding: 0;
  color: #333;
}

/* Container Styles */
.container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Header Styles */
h1 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 10px;
  color: #4CAF50;
}

/* Paragraph Styles */
p {
  text-align: center;
  font-size: 1.1em;
  color: #555;
}

/* Mermaid Chart Styles */
.chart {
  padding: 20px;
  background: #f0f8ff;
  border: 1px solid #d0e6ff;
  border-radius: 8px;
  overflow-x: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
      padding: 10px;
  }

  h1 {
      font-size: 1.5em;
  }

  p {
      font-size: 1em;
  }

}

</style>
</head>
<body>
                <div class="container">
        <h1> जिल्ला अदालतको अधिकारक्षेत्र  </h1>
               <div class="chart">
            <pre class="mermaid">

                flowchart TD
    A[जिल्ला अदालतको अधिकारक्षेत्र<br>दफा ७] 
    
    A --> B["दफा ७.१:<br>शुरु मुद्दा हेर्ने अधिकार<br><i>प्रचलित कानूनमा अन्यथा व्यवस्था भएकोमा बाहेक</i>"]
    
    B --> C["1. आफ्नो जिल्ला भित्रको<br>जुनसुकै प्रकृतिका मुद्दा"]
    B --> D["2. संविधानको धारा १४५(२) बमोजिम<br>उच्च अदालतले सुनुवाई गर्न<br>आदेश दिएको मुद्दा"]
    
    A --> E["दफा ७.२:<br>बन्दीप्रत्यक्षीकरणको<br>अधिकार"]
    
    E --> F["आफ्नो जिल्लामा कसैलाई<br>गैरकानूनी थुनामा राखेको<br>विषयमा आदेश जारी गर्ने"]
    
    A --> G["दफा ७.३:<br>निषेधाज्ञाको<br>अधिकार"]
    
    G --> H["आफ्नो जिल्लामा कुनै व्यक्तिको<br>कानून प्रदत्त हकमा आघात पुर्‍याएमा<br>वा आघात पुर्‍याउने आशंका भएमा<br>आदेश जारी गर्ने"]
    
    A --> I["दफा ७.४:<br>पुनरावेदन सुन्ने<br>अधिकार"]
    
    I --> J["1. संघीय कानून बमोजिम<br>अर्धन्यायिक निकाय वा<br>अधिकारीको निर्णय उपर"]
    I --> K["2. प्रदेश कानून बमोजिम गठित<br>स्थानीयस्तरका न्यायिक निकायको<br>निर्णय उपर"]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style B,E,G,I fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style C,D,F,H,J,K fill:#90cdf4,stroke:#2c5282,stroke-width:1px

             </pre>
        </div>
                    <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>
                <div class="container">
        <h1> Jurisdiction of District Court</h1>
               <div class="chart">
            <pre class="mermaid">

                flowchart TD
    A[Jurisdiction of District Court<br>Section 7] 
    
    A --> B["Section 7.1:<br>Original Jurisdiction<br><i>Unless otherwise provided by prevailing law</i>"]
    
    B --> C["1. All types of cases within<br>its district"]
    B --> D["2. Cases ordered for hearing by<br>High Court as per Article 145(2)<br>of Constitution"]
    
    A --> E["Section 7.2:<br>Habeas Corpus<br>Jurisdiction"]
    
    E --> F["Power to issue orders in cases<br>of illegal detention within<br>its district"]
    
    A --> G["Section 7.3:<br>Injunction<br>Jurisdiction"]
    
    G --> H["Power to issue orders when legal<br>rights are infringed or there is<br>apprehension of infringement<br>within its district"]
    
    A --> I["Section 7.4:<br>Appellate<br>Jurisdiction"]
    
    I --> J["1. Appeals against decisions of<br>quasi-judicial bodies/officials<br>under federal law"]
    I --> K["2. Appeals against decisions of<br>local judicial bodies formed<br>under provincial law"]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style B,E,G,I fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style C,D,F,H,J,K fill:#90cdf4,stroke:#2c5282,stroke-width:1px
                        </pre>
        </div>
                      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>


                <div class="container">
        <h1> उच्च अदालतको अधिकारक्षेत्र</h1>
               <div class="chart">
            <pre class="mermaid">
flowchart TD
    A[उच्च अदालतको अधिकारक्षेत्र<br>दफा ८]
    
    A --> B["दफा ८.१:<br>असाधारण अधिकारक्षेत्र"]
    B --> C["संविधानको धारा १४४(१) बमोजिम<br>रिट निवेदनमा सुनुवाई गरी<br>आवश्यक र उपयुक्त आदेश जारी गर्ने"]
    
    A --> D["दफा ८.२:<br>शुरु कारवाही र किनारा<br>गर्ने अधिकार"]
    D --> E["१. संघीय कानून बमोजिम उच्च<br>अदालतबाट शुरु कारवाही<br>र किनारा हुने मुद्दा"]
    D --> F["२. संविधानको धारा १४५(१) बमोजिम<br>मातहतका अदालतबाट<br>झिकाइएको मुद्दा"]
    
    A --> G["दफा ८.३:<br>पुनरावेदन सुन्ने<br>अधिकार"]
    
    G --> H["क. जिल्ला अदालतले दफा ७.१<br>बमोजिम गरेको फैसला"]
    G --> I["ख. जिल्ला अदालतले न्यायिक/<br>अर्धन्यायिक निकायको निर्णयमा<br>आंशिक वा पूरै बदर गरेको मुद्दा"]
    G --> J["ग. जिल्ला अदालतले पुनरावेदनको<br>रोहमा गरेको निर्णयमा:<br><i>- सरकारी/सार्वजनिक सम्पत्ति<br>- कैद सजाय भएको<br>- १ लाख भन्दा बढी जरिवाना<br>- ५ लाख भन्दा बढी बिगो</i>"]
    G --> K["घ. स्थानीय न्यायिक निकायको<br>निर्णय उपर (संघीय कानूनमा<br>अन्यथा व्यवस्था भएकोमा बाहेक)"]
    
    A --> L["दफा ८.४:<br>साधक<br>अधिकार"]
    L --> M["संघीय कानून बमोजिम<br>साधक जाँच्ने"]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style B,D,G,L fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style C,E,F,H,I,J,K,M fill:#90cdf4,stroke:#2c5282,stroke-width:1px
                

       </pre>
        </div>
                      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>
                <div class="container">
        <h1> Jurisdiction of HIgh Court</h1>
               <div class="chart">
            <pre class="mermaid">

                flowchart TD
    A[Jurisdiction of High Court<br>Section 8]
    
    A --> B["Section 8.1:<br>Extraordinary Jurisdiction"]
    B --> C["Power to issue necessary and<br>appropriate orders on writs as per<br>Article 144(1) of Constitution"]
    
    A --> D["Section 8.2:<br>Original<br>Jurisdiction"]
    D --> E["1. Cases to be originally tried<br>by High Court under<br>federal law"]
    D --> F["2. Cases withdrawn from<br>subordinate courts under<br>Article 145(1) of Constitution"]
    
    A --> G["Section 8.3:<br>Appellate<br>Jurisdiction"]
    
    G --> H["a. Appeals against decisions of<br>District Court under Section 7.1"]
    G --> I["b. Appeals where District Court<br>partially/fully reversed decisions of<br>judicial/quasi-judicial bodies"]
    G --> J["c. Appeals against District Court's<br>appellate decisions involving:<br><i>- Government/public property<br>- Imprisonment sentence<br>- Fine exceeding Rs. 100,000<br>- Amount exceeding Rs. 500,000</i>"]
    G --> K["d. Appeals against local judicial<br>bodies' decisions (unless otherwise<br>provided by federal law)"]
    
    A --> L["Section 8.4:<br>Reference<br>Jurisdiction"]
    L --> M["Power to review reference<br>cases as per federal law"]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style B,D,G,L fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style C,E,F,H,I,J,K,M fill:#90cdf4,stroke:#2c5282,stroke-width:1px

       </pre>
        </div>
                      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>
    
            <div class="container">
        <h1> Appellate Jurisdiction of Supreme Court</h1>
               <div class="chart">
            <pre class="mermaid">
                flowchart TD
    A[Supreme Court's Appellate Jurisdiction<br>Section 9] --> B["Section 9.1.a:<br>Cases originally tried by High Court<br>under Section 8.2"]
    
    A --> C["Section 9.1.b:<br>Cases where High Court sentenced<br>imprisonment of 10 years or more"]
    
    A --> D["Section 9.1.c:<br>Cases where High Court partially/fully<br>reversed lower court's decision"]
    
    A --> E["Section 9.1.d:<br>Other cases as per<br>Federal Law"]
    
    A --> F["Section 9.2:<br>Cases submitted for<br>Confirmation"]
    
    D --> G{Must meet at least<br>one criterion}
    
    G --> H[Imprisonment exceeding<br>3 years]
    G --> I[Fine exceeding<br>Rs. 500,000]
    G --> J[Amount in dispute exceeding<br>Rs. 2,500,000]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style G fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style B,C,D,E,F fill:#63b3ed,stroke:#2c5282,stroke-width:1px
    style H,I,J fill:#90cdf4,stroke:#2c5282,stroke-width:1px
   
             </pre>
        </div>
                  <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>
                <div class="container">
        <h1> सर्वोच्च अदालतको पुनरावेदकीय क्षेत्राधिकार </h1>
               <div class="chart">
            <pre class="mermaid">

             flowchart TD
    A[सर्वोच्च अदालतको पुनरावेदन क्षेत्राधिकार<br>दफा ९] --> B["दफा ९.१.क:<br>उच्च अदालतले शुरु कारवाही र किनारा<br>गरेका मुद्दाहरू"]
    
    A --> C["दफा ९.१.ख:<br>उच्च अदालतबाट दश वर्ष वा सोभन्दा<br>बढी कैद सजाय हुने गरी फैसला भएका मुद्दा"]
    
    A --> D["दफा ९.१.ग:<br>उच्च अदालतले तल्लो निकायको निर्णय<br>आंशिक वा पूरै बदर गरेका मुद्दा"]
    
    A --> E["दफा ९.१.घ:<br>संघीय कानून बमोजिम<br>सर्वोच्च अदालतमा पुनरावेदन लाग्ने मुद्दा"]
    
    A --> F["दफा ९.२:<br>साधक पेश भएका मुद्दा"]
    
    D --> G{कम्तीमा एउटा<br>अवस्था पूरा हुनुपर्ने}
    
    G --> H[तीन वर्षभन्दा बढी<br>कैद सजाय भएको]
    G --> I[पाँच लाख रुपैयाँभन्दा<br>बढी जरिवाना भएको]
    G --> J[पच्चीस लाख रुपैयाँभन्दा<br>बढी बिगो भएको]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style G fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style B,C,D,E,F fill:#63b3ed,stroke:#2c5282,stroke-width:1px
    style H,I,J fill:#90cdf4,stroke:#2c5282,stroke-width:1px   

         </pre>
        </div>
                      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>
     <div class="container">
        <h1> साधक जाँच सम्बन्धी</h1>
               <div class="chart">
            <pre class="mermaid">

                flowchart TD
    A[साधक सम्बन्धी व्यवस्था<br>दफा १०]
    
    A --> B["दफा १०.१:<br>साधक पेश गर्ने<br>सामान्य नियम"]
    B --> C["संघीय कानून बमोजिम साधक<br>जाँच गराउनु पर्ने मुद्दामा<br>पुनरावेदन सुन्ने अदालतमा<br>साधक पेश गर्नुपर्ने"]
    
    A --> D["दफा १०.२:<br>सर्वोच्च अदालतमा<br>साधक पेश"]
    D --> E["उच्च अदालतले जन्मकैदको<br>सजाय हुने ठहर्‍याएको<br>मुद्दामा मात्र"]
    
    A --> F["दफा १०.३:<br>पुनरावेदन र साधकको<br>सम्बन्ध"]
    F --> G["१. साधक पेश भएको मुद्दामा<br>पुनरावेदन परेमा पुनरावेदनको<br>रोहबाट हेर्ने"]
    F --> H["२. एउटै मुद्दामा कसैको पुनरावेदन<br>परेको र कसैको नपरेमा पुनरावेदन<br>नगर्नेको हकमा साधकको<br>रोहबाट हेर्ने"]
    
    A --> I["दफा १०.४:<br>साधकमा पुनरावेदन<br>सरहको जिकिर"]
    I --> J["पुनरावेदन नगर्ने पक्ष वा अन्य<br>सम्बन्धित व्यक्तिले पुनरावेदन<br>सरहको जिकिर लिई निवेदन<br>दिन सक्ने"]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style B,D,F,I fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style C,E,G,H,J fill:#90cdf4,stroke:#2c5282,stroke-width:1px

       </pre>
        </div>
           <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>

                    <div class="container">
        <h1> Referred Cases (sadhak)</h1>
               <div class="chart">
            <pre class="mermaid">

              flowchart TD
    A[Provisions Regarding Referred Cases<br>Section 10]
    
    A --> B["Section 10.1:<br>General Rule for<br>Reference Filing"]
    B --> C["Cases requiring reference review<br>under federal law must be<br>submitted to appellate court<br>for reference"]
    
    A --> D["Section 10.2:<br>Reference to<br>Supreme Court"]
    D --> E["Only in cases where High Court<br>has pronounced life imprisonment"]
    
    A --> F["Section 10.3:<br>Relationship between<br>Appeal and Reference"]
    F --> G["1. If appeal is filed in a<br>reference case, it shall be<br>heard as appeal"]
    F --> H["2. In same case, if some file appeal<br>and others don't, non-appealants'<br>cases shall be heard as<br>reference"]
    
    A --> I["Section 10.4:<br>Appeal-like Claims<br>in Reference"]
    I --> J["Non-appealing parties or other<br>concerned persons may file<br>petition with claims similar<br>to appeal"]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style B,D,F,I fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style C,E,G,H,J fill:#90cdf4,stroke:#2c5282,stroke-width:1px  

       </pre>
        </div>
                          <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>

                    <div class="container">
        <h1>फैसला पुनरावलोकन सम्बन्धी व्यवस्था </h1>
               <div class="chart">
            <pre class="mermaid">

                flowchart TD
    A[पुनरावलोकन सम्बन्धी व्यवस्था<br>दफा ११]
    
    A --> B["दफा ११.१:<br>सामान्य नियम"]
    B --> C["कुनै अदालतबाट फैसला वा<br>अन्तिम आदेश भइसकेको मुद्दा<br>सोही अदालतबाट पुनरावलोकन<br>गरिने छैन"]
    
    A --> D["दफा ११.२:<br>सर्वोच्च अदालतको<br>पुनरावलोकन अधिकार"]
    
    D --> E["क. इन्साफमा तात्विक असर पर्ने<br>प्रमाण मुद्दा किनारा भएपछि<br>मात्र पक्षलाई थाहा भएमा"]
    D --> F["ख. सर्वोच्च अदालतबाट स्थापित<br>नजिर वा कानूनी सिद्धान्तको<br>प्रतिकूल फैसला भएमा"]
    
    A --> G["दफा ११.३:<br>पुनरावलोकन नहुने<br>अवस्थाहरू"]
    
    G --> H["क. एक पटक पुनरावलोकन<br>गरिसकेको"]
    G --> I["ख. बृहत पूर्ण इजलासबाट<br>फैसला भएको"]
    G --> J["ग. संवैधानिक इजलासबाट<br>निर्णय भएको"]
    G --> K["घ. मुद्दा दोहोर्‍याई फैसला<br>भएको"]
    G --> L["ङ. दफा १२ बमोजिम दोहोर्‍याई<br>हेरिएको मुद्दामा उच्च अदालतको<br>इन्साफ सदर वा निस्सा नभएको"]
    
    A --> M["दफा ११.४-६:<br>प्रक्रियागत व्यवस्था"]
    
    M --> N["- ६० दिनभित्र निवेदन दिनुपर्ने<br>- पहिला फैसला गर्ने बाहेकका<br>न्यायाधीशबाट अनुमति<br>- पहिला फैसला गर्ने र अनुमति<br>दिने बाहेकका न्यायाधीशबाट<br>सुनुवाई"]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style B,D,G,M fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style C,E,F,H,I,J,K,L,N fill:#90cdf4,stroke:#2c5282,stroke-width:1px

       </pre>
        </div>
                          <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>
                    <div class="container">
        <h1> Decision Review of Case</h1>
               <div class="chart">
            <pre class="mermaid">

                flowchart TD
    A[Review Provisions<br>Section 11]
    
    A --> B["Section 11.1:<br>General Rule"]
    B --> C["No court shall review its own<br>final judgment or order"]
    
    A --> D["Section 11.2:<br>Supreme Court's<br>Review Power"]
    
    D --> E["a. When evidence affecting<br>judgment substantially is<br>discovered after decision"]
    D --> F["b. When judgment contradicts<br>precedent or legal principle<br>established by Supreme Court"]
    
    A --> G["Section 11.3:<br>Cases Not Subject<br>to Review"]
    
    G --> H["a. Already reviewed once"]
    G --> I["b. Decided by Full Bench"]
    G --> J["c. Decided by<br>Constitutional Bench"]
    G --> K["d. Cases previously<br>reheard"]
    G --> L["e. Cases under Section 12<br>where High Court decision<br>upheld/leave denied"]
    
    A --> M["Section 11.4-6:<br>Procedural Rules"]
    
    M --> N["- Petition within 60 days<br><br>- Permission from judges<br>other than original judge<br><br>- Hearing by judges other<br>than those who decided<br>or granted permission"]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style B,D,G,M fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style C,E,F,H,I,J,K,L,N fill:#90cdf4,stroke:#2c5282,stroke-width:1px

       </pre>
        </div>
                          <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>

                    <div class="container">
        <h1> दोहोर्‍याई पाउँ अधिकारक्षेत्र</h1>
               <div class="chart">
            <pre class="mermaid">

                flowchart TD
    A[मुद्दा दोहोर्‍याई हेर्ने व्यवस्था<br>दफा १२]
    
    A --> B["दफा १२.१:<br>दोहोर्‍याई हेर्न सकिने<br>अवस्थाहरू"]
    
    B --> C["क. गम्भीर संवैधानिक वा<br>कानूनी त्रुटि भएको"]
    B --> D["ख. सर्वोच्च अदालतको नजिर<br>वा सिद्धान्तको पालना नगरेको<br>वा गलत प्रयोग गरेको"]
    B --> E["ग. सरकारी/सार्वजनिक सम्पत्ति<br>सम्बन्धी विवादमा प्रमाणको<br>उचित मूल्यांकन नभएको"]
    B --> F["घ. विशेष वर्गको प्रतिनिधित्व<br>नभई इन्साफमा असर परेको:<br>- बालक<br>- महिला<br>- अपाङ्गता भएका व्यक्ति<br>- मानसिक रोगी<br>- ७५ वर्ष माथिका"]
    
    A --> G["दफा १२.२:<br>दोहोर्‍याई नहेरिने<br>अवस्थाहरू"]
    
    G --> H["क. एक पटक दोहोर्‍याई<br>हेरिसकेको"]
    G --> I["ख. दफा ८.३.ख बमोजिम उच्च<br>अदालतबाट पुनरावेदन सुनी<br>निर्णय भएको"]
    
    A --> J["दफा १२.३-६:<br>प्रक्रियागत व्यवस्था"]
    
    J --> K["- ४५ दिनभित्र निवेदन दिनुपर्ने<br><br>- संयुक्त इजलासबाट<br>अनुमति प्रदान<br><br>- अनुमति दिने र पहिला<br>फैसला गर्ने बाहेकका<br>न्यायाधीशबाट सुनुवाई"]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style B,G,J fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style C,D,E,F,H,I,K fill:#90cdf4,stroke:#2c5282,stroke-width:1px

       </pre>
        </div>
                          <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>
                    <div class="container">
        <h1> Revision of Case</h1>
               <div class="chart">
            <pre class="mermaid">

                
                 flowchart TD
    A[Provisions for Case Rehearing<br>Section 12]
    
    A --> B["Section 12.1:<br>Grounds for<br>Rehearing"]
    
    B --> C["a. Serious constitutional or<br>legal error"]
    B --> D["b. Non-compliance with or<br>misapplication of Supreme<br>Court precedent/principle"]
    B --> E["c. Improper evaluation of<br>evidence in government/<br>public property disputes"]
    B --> F["d. Lack of representation<br>affecting justice for:<br>- Children<br>- Women<br>- Persons with disabilities<br>- Mentally ill persons<br>- Persons above 75 years"]
    
    A --> G["Section 12.2:<br>Cases Not Subject<br>to Rehearing"]
    
    G --> H["a. Cases already reheard<br>by Supreme Court"]
    G --> I["b. Cases decided by High Court<br>in appeal under<br>Section 8.3.b"]
    
    A --> J["Section 12.3-6:<br>Procedural Rules"]
    
    J --> K["- Petition within 45 days<br><br>- Permission from<br>Joint Bench<br><br>- Hearing by judges other<br>than those who granted<br>permission or originally<br>decided"]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white
    style B,G,J fill:#4299e1,stroke:#2c5282,stroke-width:2px
    style C,D,E,F,H,I,K fill:#90cdf4,stroke:#2c5282,stroke-width:1px 

       </pre>
        </div>
                          <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>
 <div class="container">
            <h1>पुनरावेदन र साधक सुन्ने अदालतको अधिकार</h1>
        <div class="chart">
            <pre class="mermaid">

                flowchart TD
    A[पुनरावेदन सुन्ने र साधक जाँच्ने<br>अदालतको अधिकार<br>- दफा १४ -] --> B[निर्णय सम्बन्धी अधिकार<br>- दफा १४-१-क,ख -]
    B --> B1[मातहतका अदालतको निर्णय<br>सदर वा आंशिक/पूर्ण बदर गर्ने<br>- दफा १४-१-क -]
    B --> B2[मातहतका अदालतले गर्न पाउने<br>फैसला वा अन्तिम आदेश गर्ने<br>- दफा १४-१-ख -]
    
    A --> C[प्रमाण सम्बन्धी अधिकार<br>- दफा १४-१-ग -]
    C --> C1[छुटेको प्रमाण सङ्कलन]
    C1 --> C2{प्रमाण कसरी<br>सङ्कलन गर्ने?}
    C2 -->|पहिलो विकल्प| C3[आफैंले<br>प्रमाण बुझ्ने]
    C2 -->|दोस्रो विकल्प| C4[मातहतका अदालतलाई<br>प्रमाण बुझ्न पठाउने]
    
    A --> D[अपूर्ण निर्णय सम्बन्धी व्यवस्था<br>- दफा १४-१-घ -]
    D --> D1[आंशिक निर्णय भएका मुद्दामा]
    D1 --> D2[मनासिब समय तोक्ने]
    D2 --> D3[बाँकी प्रश्नको निर्णय गर्न<br>मातहतका अदालतमा पठाउने]
    
    A --> E[जिल्ला र उच्च अदालतको<br>विशेष अधिकार<br>- दफा १४-२ -]
    E --> E1[मातहतका निकायले निर्णय<br>नगरेका विषयमा समेत<br>निर्णय गर्न सक्ने]
    
    style A fill:#e6f3ff,stroke:#333,stroke-width:2px
    style B fill:#ffffff,stroke:#333
    style C fill:#ffffff,stroke:#333 
    style D fill:#ffffff,stroke:#333
    style E fill:#ffffff,stroke:#333
   
                   </pre>
        </div>
    <p> न्याय प्रशासन ऐन, २०७३ को दफा १४ मा आधारित</p>
       <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
        </div>

    <div class="container">
        <h1>अन्तरकालिन आदेश उपर निवेदन (दफा १५)</h1>
               <div class="chart">
            <pre class="mermaid">
                flowchart TD
    A[अन्तरकालीन आदेश उपर निवेदन<br>- दफा १५ -] --> B[सामान्य व्यवस्था<br>- दफा १५-१ -]
    
    B --> B1[पुर्पक्षको लागि प्रतिवादीलाई<br>तारिख, जमानत वा थुनामा<br>राख्ने आदेश]
    B --> B2[मुद्दाको कारबाहीको<br>सिलसिलामा भएको<br>अन्य अन्तरकालीन आदेश]
    B --> B3[एक तह माथिको<br>पुनरावेदन सुन्ने<br>अदालतमा निवेदन दिन सकिने]
    
    A --> C[विशेष व्यवस्था<br>- दफा १५-२ -]
    C --> C1[दश वर्ष वा सोभन्दा बढी<br>कैदको सजाय हुन सक्ने मुद्दा]
    C1 --> C2[कानूनी त्रुटि वा<br>कार्यविधि सम्बन्धी<br>अनियमितताको प्रश्नमा]
    C2 --> C3[सर्वोच्च अदालतमा<br>निवेदन दिन सकिने]
    
    style A fill:#e6f3ff,stroke:#333,stroke-width:2px
    style B fill:#ffffff,stroke:#333
    style C fill:#ffffff,stroke:#333
    
           </pre>
        </div>
          <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
    </div>
        <div class="container">
        <h1>अदालतको अवहेलना (दफा १७)</h1>
               <div class="chart">
            <pre class="mermaid">
                flowchart TD
    A[अदालतको अवहेलनामा कारबाही<br>चलाउने अधिकार<br>- दफा १७ -] --> B[सर्वोच्च अदालतको अधिकार<br>- दफा १७-१ -]
    B --> B1[आफ्नो अवहेलनामा]
    B --> B2[उच्च अदालतको अवहेलनामा]
    B --> B3[जिल्ला अदालतको अवहेलनामा]
    
    A --> C[उच्च अदालतको अधिकार<br>- दफा १७-२ -]
    C --> C1[आफ्नो अवहेलनामा]
    C --> C2[मातहतका जिल्ला अदालत<br>वा न्यायिक निकायको<br>अवहेलनामा]
    
    A --> D[जिल्ला अदालतको अधिकार<br>- दफा १७-३ -]
    D --> D1[आफ्नो अवहेलनामा]
    D --> D2[मातहतको अदालत वा<br>न्यायिक निकायको<br>अवहेलनामा]
    
    A --> E[सजायको व्यवस्था<br>- दफा १७-४ -]
    E --> E1[एक वर्षसम्म कैद]
    E1 --> E2[दश हजार रुपैयाँसम्म जरिवाना]
    E2 --> E3[दुवै सजाय]
    
    A --> F[क्षमादानको व्यवस्था<br>- दफा १७-५,६ -]
    F --> F1[क्षमा मागेमा तामेलीमा<br>राख्न सकिने<br>- दफा १७-५ -]
    F --> F2[सजाय कार्यान्वयनमा<br>लचकता<br>- दफा १७-६ -]
    
    style A fill:#ffffff,stroke:#000,stroke-width:2px
    style B fill:#ffffed,stroke:#000
    style C fill:#ffffed,stroke:#000
    style D fill:#ffffed,stroke:#000
    style E fill:#e8ffe8,stroke:#000
    style F fill:#e8ffe8,stroke:#000
    
               </pre>
        </div>
            <p> न्याय प्रशासन ऐन, २०७३ को दफा १७</p>
              <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
    </div>
    <div class="container">
<h1> न्यायाधीशले आफैं गर्नुपर्ने काम (दफा २८) </h1>
        <div class="chart">
             <pre class="mermaid">
                 flowchart TD
    A[न्यायाधीश आफैंले गर्नु पर्ने काम<br>- दफा २८ -] --> B[सामान्य नियम<br>- दफा २८-१ -]
    
    B --> B1[आफैंले गर्नुपर्ने कार्यहरू]
    B1 --> B11[बयान]
    B1 --> B12[बकपत्र]
    B1 --> B13[फैसला]
    B1 --> B14[आदेश]
    
    B --> B2[अरूलाई गर्न लगाउन सकिने कार्यहरू<br>- दफा २८-१ को प्रतिबन्धात्मक वाक्यांश -]
    B2 --> B21[फैसला वा आदेश<br>टाइप गर्न लगाउन]
    B2 --> B22[आफैंले प्रश्न गरी<br>बयान वा बकपत्र<br>लेखबद्ध गराउन]
    
    A --> C[स्रेस्तेदारको विशेष अधिकार<br>- दफा २८-२ -]
    C --> C1[जिल्ला न्यायाधीशको<br>अनुपस्थितिमा]
    C1 --> C11[बयान गराउन सक्ने]
    C1 --> C12[बकपत्र गराउन सक्ने]
    C1 --> C13[पुर्पक्षको लागि<br>थुना, जमानत वा<br>तारिखमा राख्ने<br>आदेश दिन सक्ने]
    
    A --> D[न्यायाधीशबाट विचार गरिनुपर्ने<br>- दफा २८-३ -]
    D --> D1[न्यायाधीश उपस्थित<br>भएपछि स्रेस्तेदारको<br>आदेश जाँच्नुपर्ने]
    D1 --> D2{आदेश कानून<br>बमोजिम छ?}
    D2 -->|छैन| D3[कानून बमोजिम<br>गर्नु गराउनु पर्ने]
    D2 -->|छ| D4[आदेश यथावत<br>कायम रहने]
    
    style A fill:#ffffff,stroke:#000,stroke-width:2px
    style B fill:#ffffed,stroke:#000
    style C fill:#ffffed,stroke:#000
    style D fill:#e8ffe8,stroke:#000
                         </pre>
        </div>
          <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
                </div>       
     <div class="container">
        <h1>विधेयक प्रक्रिया फ्लोचार्ट</h1>
        <p>नेपालको संघीय संसदमा विधेयक पारित गर्ने प्रक्रियाको चित्रण</p>
        <div class="chart">
            <pre class="mermaid">
                flowchart TD
                A[विधेयक प्रस्तुत] --> B{अर्थ विधेयक हो?}
                B -->|हो| C[प्रतिनिधि सभामा मात्र प्रस्तुत]
                B -->|होइन| D[कुनै पनि सदनमा प्रस्तुत]
                C --> E[प्रतिनिधि सभाद्वारा पारित]
                E --> F[राष्ट्रिय सभामा पठाइने]
                F --> G{15 दिन भित्र सुझाव?}
                G -->|छ| H[सुझाव सहित फिर्ता]
                G -->|छैन| I[प्रतिनिधि सभाले राष्ट्रपति समक्ष पेश]
                H --> J[प्रतिनिधि सभामा छलफल]
                J --> K[उचित सुझाव समावेश]
                D --> L[सदनद्वारा पारित]
                L --> M[अर्को सदनमा पठाइने]
                M --> N{2 महिना भित्र?}
                N -->|पारित| O[राष्ट्रपति समक्ष पेश]
                N -->|अस्वीकृत/संशोधन| P[उत्पत्ति सदनमा फिर्ता]
                P --> Q[उत्पत्ति सदनमा पुनर्विचार]
                Q --> R[बहुमतले पुन: पारित]
                K --> O
                I --> O
                R --> O
                O --> S{राष्ट्रपतिको निर्णय}
                S -->|15 दिन भित्र प्रमाणीकरण| T[ऐन बन्ने]
                S -->|पुनर्विचारको लागि फिर्ता| U[सदनमा पुनर्विचार]
                U --> V[दुवै सदनले पुन: पारित]
                V --> W[राष्ट्रपति समक्ष पेश]
                W --> X[15 दिन भित्र प्रमाणीकरण]
                X --> T
            </pre>
        </div>
           <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
    </div>

               
    
    <div class="container">
        <h1>Federal Legislative Process (art. 110-113)</h1>
        <p>This flowchart illustrates the process of passing bills in Nepal's Federal Parliament, including Money Bills and General Bills.</p>
        <div class="chart">
            <pre class="mermaid">
                graph TD
                A[Bill Introduced] --> B{Money Bill?}
                B --> |Yes|C[House of Representatives]
                B --> |No|D[Any House]
                
                C --> E[Passed by HoR]
                E --> F[To National Assembly]
                
                F --> G{Within 15 days}
                G --> |Suggestion|H[Back to HoR]
                G --> |No Action|I[To President]
                
                D --> J[Passed by House]
                J --> K[Other House]
                
                K --> L{Within 2 months}
                L --> |Passed|M[To President]
                L --> |Rejected|N[Back to Origin]
                
                N --> O[Reconsidered]
                O --> M
                
                H --> P[Review in HoR]
                P --> M
                
                M --> Q{President}
                Q --> |15 days|R[Becomes Act]
                Q --> |Return|S[Reconsider]
                
                S --> T[Re-pass]
                T --> U[To President]
                U --> R
            </pre>
        </div>
          <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
    </div>
    <div class="container">
        <h1>प्रदेश व्यवस्थापन कार्यविधि</h1>
        <div class="chart">
            <pre class="mermaid">
                flowchart TD
                A["विधेयक प्रस्तुत\n(१९८.१)"]
                B["अर्थ विधेयक वा शान्ति सुरक्षा\nसम्बन्धी विधेयक?\n(१९८.२)"]
                C["सरकारी विधेयकको रूपमा प्रस्तुत\n(१९८.२)"]
                D["अन्य विधेयक"]
                E["अर्थ विधेयक सम्बन्धी विवाद?\n(१९८.४)"]
                F["सभामुखको निर्णय अन्तिम\n(१९८.४)"]
                G["प्रदेश सभामा विधेयक पारित\n(१९९.१)"]
                H["सभामुखद्वारा प्रमाणित\n(२०१.१)"]
                I["प्रदेश प्रमुख समक्ष पेश\n(२०१.१)"]
                J["प्रदेश प्रमुखको निर्णय\n(२०१.२, २०१.३)"]
                K["१५ दिन भित्र प्रमाणीकरण\n(२०१.२)"]
                L["पुनर्विचारको लागि सन्देश सहित फिर्ता\n१५ दिन भित्र\n(२०१.३)"]
                M["प्रदेश सभामा पुनर्विचार\n(२०१.४)"]
                N["संशोधन सहित वा प्रस्तुत\nरूपमा पारित\n(२०१.४)"]
                O["१५ दिन भित्र प्रमाणीकरण\n(२०१.४)"]
                P["ऐन बन्ने\n(२०१.५)"]
                
                A --> B
                B -->|हो| C
                B -->|होइन| D
                C --> E
                D --> E
                E --> F
                F --> G
                G --> H
                H --> I
                I --> J
                J -->|स्वीकृत| K
                J -->|अस्वीकृत| L
                L --> M
                M --> N
                N --> O
                K --> P
                O --> P
                
                style A fill:#f9f,stroke:#333,stroke-width:2px
                style P fill:#9f9,stroke:#333,stroke-width:2px

            </pre>
        </div>
        </div>

        <div class="container">
            <h1>Provincial Legislative Process</h1>
            <div class="chart">
                <pre class="mermaid">
                    flowchart TD
    A["Bill Introduction\n(198.1)"]
    B["Is it Finance Bill or\nPeace & Security Bill?\n(198.2)"]
    C["Present as Government Bill\n(198.2)"]
    D["Other Bills"]
    E["Dispute about Finance Bill?\n(198.4)"]
    F["Speaker's Decision Final\n(198.4)"]
    G["Bill Passed in\nProvincial Assembly\n(199.1)"]
    H["Authenticated by Speaker\n(201.1)"]
    I["Presented to\nHead of Province\n(201.1)"]
    J["Decision by Head of Province\n(201.2, 201.3)"]
    K["Authentication within\n15 days\n(201.2)"]
    L["Return with Message\nwithin 15 days\n(201.3)"]
    M["Reconsideration in\nProvincial Assembly\n(201.4)"]
    N["Passed with or\nwithout Amendment\n(201.4)"]
    O["Authentication within\n15 days\n(201.4)"]
    P["Becomes Act\n(201.5)"]
    
    A --> B
    B -->|Yes| C
    B -->|No| D
    C --> E
    D --> E
    E --> F
    F --> G
    G --> H
    H --> I
    I --> J
    J -->|Approved| K
    J -->|Not Approved| L
    L --> M
    M --> N
    N --> O
    K --> P
    O --> P
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style P fill:#9f9,stroke:#333,stroke-width:2px

</pre>
</div>
              <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>
        <div class="container">
        <h1>Treaty Making Process</h1>
        <div class="chart">
            <pre class="mermaid">
flowchart TD
    %% Pre-negotiation Phase
    Start([Start]) --> ID[Identification of Needs & Goals]
    ID --> PA[Policy Analysis]
    PA --> SC[Stakeholder Consultation]
    SC --> MA[Mandate Authorization]
    MA --> FT[Formation of Treaty Team]
    FT --> PS[Preparation Strategy]
    
    %% Negotiation & Formation
    PS --> A[Negotiation]
    A --> B[Authentication of Text]
    B --> C[Expression of Consent to be Bound]
    
    C --> D{Method of Expression}
    D -->|Signature| E[Definitive Signature]
    D -->|Exchange| F[Exchange of Instruments]
    D -->|Ratification| G[Ratification]
    D -->|Acceptance| H[Acceptance]
    D -->|Approval| I[Approval]
    D -->|Accession| J[Accession]
    
    E --> K[Entry into Force]
    F --> K
    G --> K
    H --> K
    I --> K
    J --> K
    
    %% Reservations Process
    K --> L{Reservations?}
    L -->|Yes| M[Submit Reservations]
    M --> N[Other Parties Accept/Object]
    N --> O[Treaty in Force with Reservations]
    L -->|No| P[Treaty in Force as Written]
    
    %% Registration and Implementation
    O --> REG[Registration with UN Secretariat]
    P --> REG
    REG --> PUB[Publication in UNTS]
    PUB --> Q[Implementation & Observation]
    
    %% Ongoing Process
    Q --> R{Amendments/Modifications?}
    R -->|Yes| S[Amendment Process]
    S --> Q
    R -->|No| Q
    
    Q --> T{Termination/Withdrawal?}
    T -->|Yes| U[End of Treaty Relations]
    T -->|No| Q

    %% Styling
    classDef process fill:#e1f3fe,stroke:#333,stroke-width:1px;
    classDef decision fill:#ffe8e8,stroke:#333,stroke-width:1px;
    class ID,PA,SC,MA,FT,PS,A,B,C,E,F,G,H,I,J,K,M,N,O,P,REG,PUB,Q,S,U process;
    class D,L,R,T decision;
        </pre>
</div>
            <p> This flow chart is prepared based on VCLT, 1969)</p>
              <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>        
    <div class="container">
        <h1>Treaty Ratification Process in Nepal</h1>
        <div class="chart">
            <pre class="mermaid">
                flowchart TD
                A[Treaty Proposal] --> B{Provincial Matter?}
                B -->|Yes| C[Province Consultation]
                B -->|No| D[Federal Government]
                
                C --> D
                D --> E{Treaty Type}
                
                E -->|Special Treaty| F[Two-thirds Required]
                E -->|General Treaty| G[Simple Majority]
                
                F --> H[Special Categories]
                H --> I[Peace & Friendship]
                H --> J[Security Alliance]
                H --> K[Nepal Boundaries]
                H --> L[Natural Resources]
                
                I --> M[Two-thirds Majority in Both Houses]
                J --> M
                K --> M
                L --> M
                
                G --> N[Simple Majority in House of Representatives]
                
                M --> P[To President]
                N --> P
                
                P --> Q{Presidential Review}
                Q -->|Assent| R[Treaty Implementation]
                Q -->|Return| S[Parliament Reconsideration]
                
                S --> T[Re-pass]
                T --> U[Back to President]
                U --> R
                
</pre>
</div>
<p></p>Note: Acceptance/approval is alternative to ratification. However acceptance/approval of treaty has same legal effect as ratification. But it is generally faster with simplified domestic process. It is generally done in technical and administrative treaty  by executive body. But Nepal generally uses ratification for treaties.</p>
  <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
    </div>
<div class="container">
    <h1>नेपालमा सन्धिको अनुमोदन पक्रिया</h1>
    <div class="chart">
        <pre class="mermaid">
            flowchart TD
    A[सन्धि प्रस्ताव] --> B{प्रदेशको अधिकार क्षेत्रमा पर्छ?}
    B -->|पर्छ| C[सम्बन्धित प्रदेशसँग परामर्श]
    B -->|पर्दैन| D[संघीय सरकारले प्रक्रिया अगाडि बढाउने]
    C --> D
    D --> E{सन्धिको प्रकृति?}
    
    E -->|विशेष महत्वको सन्धि| F[दुई तिहाई बहुमत आवश्यक]
    E -->|साधारण प्रकृतिको सन्धि| G[साधारण बहुमत पर्याप्त]
    
    F --> H{विषयहरू}
    H --> I[शान्ति र मैत्री]
    H --> J[सुरक्षा एवं सामरिक सम्बन्ध]
    H --> K[नेपाल राज्यको सीमाना]
    H --> L[प्राकृतिक स्रोत र बाँडफाँड]
    
    I --> M[संघीय संसदका दुवै सदनमा दुई तिहाई बहुमतद्वारा अनुमोदन]
    J --> M
    K --> M
    L --> M
    
    G --> N[प्रतिनिधि सभाको बैठकमा उपस्थित सदस्यहरूको साधारण बहुमतद्वारा अनुमोदन]
    
    M --> O[सन्धि कार्यान्वयन]
    N --> O
    
    style F fill:#ffcccc
    style G fill:#ccffcc
    style M fill:#ffe6e6
    style N fill:#e6ffe6
</pre>
</div>
      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>
<div class="container">
    <h1>Formation of Council of Minister</h1>
    <div class="chart">
        <pre class="mermaid">
            graph TD
    A[Election Results] --> B{Single Party Majority?}
    B -->|Yes| C[Party Leader becomes PM]
    B -->|No| D{Coalition Majority?}
    
    D -->|Yes| E[Coalition Leader PM]
    D -->|No| F[Largest Party Leader PM]
    
    E --> G{Vote of Confidence?}
    F --> G
    
    G -->|Yes| H[Continues as PM]
    G -->|No| I{Any Member Shows Majority?}
    
    I -->|Yes| J[New PM]
    I -->|No| K[House Dissolved]
    
    J --> L{Vote of Confidence?}
    L -->|Yes| H
    L -->|No| K
    
    H --> M[No Confidence Motion]
    M --> N{25% Support & Names New PM?}
    N -->|Yes| O{Gets Majority?}
    N -->|No| H
    
    O -->|Yes| P[New PM Takes Office]
    O -->|No| H
</pre>
</div>
      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>
<div class="container">
    <h1>संविधान संशोधन पक्रिया</h1>
    <div class="chart">
        <pre class="mermaid">
            flowchart TD
    A[संविधान संशोधन प्रस्ताव] --> B{प्रतिकूल छ?}
    B -->|छ| C[संशोधन गर्न सकिदैन]
    B -->|छैन| D[संघीय संसदको कुनै पनि सदनमा विधेयक पेश]
    
    D --> E[30 दिन भित्र सार्वजनिक प्रकाशन]
    
    E --> F{प्रदेश सीमाना वा अनुसूची-६ सँग सम्बन्धित?}
    
    F -->|होइन| J[संघीय संसदमा मतदान]
    
    F -->|हो| G[30 दिन भित्र प्रदेश सभामा पठाउने]
    
    G --> H[प्रदेश सभाको निर्णय - 3 महिना भित्र]
    
    H --> I{बहुसंख्यक प्रदेश सभाले अस्वीकृत?}
    
    I -->|हो| K[विधेयक निष्क्रिय]
    
    I -->|होइन| J
    
    J --> L{दुई तिहाई बहुमत?}
    
    L -->|छैन| M[विधेयक अस्वीकृत]
    
    L -->|छ| N[राष्ट्रपति समक्ष पेश]
    
    N --> O[15 दिन भित्र प्रमाणीकरण]
    
    O --> P[संविधान संशोधन लागू]
</pre>
</div>
      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>
<div class="container">
    <h1>Constitution Amendment Process in Nepal</h1>
    <div class="chart">
        <pre class="mermaid">
            flowchart TD
    A[Constitutional Amendment Proposal] --> B{Is it adverse to basic features?}
    B -->|Yes| C[Cannot be amended]
    B -->|No| D[Bill presented in any house of Federal Parliament]
    
    D --> E[Public publication within 30 days]
    
    E --> F{Related to provincial boundary or Schedule-6?}
    
    F -->|No| J[Voting in Federal Parliament]
    
    F -->|Yes| G[Send to Provincial Assembly within 30 days]
    
    G --> H[Provincial Assembly Decision - within 3 months]
    
    H --> I{Rejected by majority of Provincial Assemblies?}
    
    I -->|Yes| K[Bill becomes inactive]
    
    I -->|No| J
    
    J --> L{Two-thirds majority?}
    
    L -->|No| M[Bill rejected]
    
    L -->|Yes| N[Presented to President]
    
    N --> O[Authentication within 15 days]
    
    O --> P[Constitutional Amendment comes into effect]
</pre>
</div>
      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>
<div class="container">
    <h1>Extradition Process </h1>
    <div class="chart">
        <pre class="mermaid">
            flowchart TD
    A[विदेशी राज्यबाट सुपुर्दगीको अनुरोध] --> B{अनुरोध माध्यम}
    
    B -->|तत्काल पक्राउको लागि| C[सोझै गृह मन्त्रालयमा]
    B -->|नियमित प्रक्रिया| D[कूटनैतिक माध्यम मार्फत]
    
    C --> E[प्रथम दृष्टिमा अभियुक्त देखिने प्रमाण वा फैसलाको आधारमा पक्राउ]
    E --> F[३ दिनभित्र माग गर्ने राज्यलाई जानकारी]
    F --> G[७ दिनभित्र कूटनैतिक माध्यमबाट औपचारिक अनुरोध]
    
    D --> H[परराष्ट्र मन्त्रालय मार्फत गृह मन्त्रालयमा]
    G --> H
    
    H --> I[गृह मन्त्रालयद्वारा १५ दिनभित्र अध्ययन र जाँचबुझ]
    
    I --> J{कारबाही अघि बढाउने?}
    J -->|पर्याप्त विवरण नभए| K[थप विवरण माग]
    K --> H
    
    J -->|हो| L[प्रमुख जिल्ला अधिकारीलाई आदेश]
    J -->|होइन| M[माग गर्ने राज्यलाई जानकारी]
    
    L --> N[पक्राउ पूर्जी जारी]
    N --> O[२४ घण्टाभित्र जिल्ला अदालतमा पेश]
    
    O --> P[अदालतको आदेशले थुनामा राख्ने]
    P --> Q[७ दिनभित्र जिल्ला सरकारी वकील मार्फत अदालतमा प्रतिवेदन]
    
    Q --> R[अदालतद्वारा सुपुर्दगी सम्बन्धी जाँचबुझ]
    
    R --> S{अदालतको निर्णय}
    S -->|सुपुर्दगी गर्न मिल्ने| T[४५ दिनसम्म थुनामा राख्ने आदेश]
    S -->|सुपुर्दगी गर्न नमिल्ने| U[थुनामुक्त गर्ने आदेश]
    
    T --> V[३ दिनभित्र माग गर्ने राज्यलाई जानकारी]
    V --> W[३० दिनभित्र सुपुर्दगीको व्यवस्था]
    
    W --> X[स्थान, मिति र समय निर्धारण]
    X --> Y[सुपुर्दगी कार्यान्वयन]
    
    U --> Z[माग गर्ने राज्यलाई जानकारी]

    style A fill:#f9e79f,stroke:#000000
    style B fill:#aed6f1,stroke:#000000
    style J fill:#aed6f1,stroke:#000000
    style S fill:#aed6f1,stroke:#000000
    style I fill:#d5f5e3,stroke:#000000
    style R fill:#d5f5e3,stroke:#000000
    style T fill:#f08080,stroke:#000000
    style U fill:#f08080,stroke:#000000
</pre>
</div>
      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>

<div class="container">
    <h1>MLA Process in Nepal</h1>
    <div class="chart">
        <pre class="mermaid">

            flowchart TD
    A[अदालतमा मुद्दा विचाराधीन] --> B{पारस्परिक सहायता आवश्यक छ?}
    B -->|छ| C[अदालतबाट आदेश]
    B -->|छैन| D[सामान्य प्रक्रियामा मुद्दा अगाडि बढ्ने]
    
    C --> E[केन्द्रीय अधिकारी समक्ष अनुरोध]
    
    E --> F[आवश्यक विवरण र कागजात संकलन]
    F --> G[कागजात प्रमाणीकरण]
    
    G --> H{द्विपक्षीय सन्धि छ?}
    H -->|छ| I[सन्धि अनुसार अनुरोध]
    H -->|छैन| J[पारस्परिकताको आश्वासन]
    
    I --> K[कूटनैतिक माध्यमबाट विदेशी राज्यलाई अनुरोध]
    J --> K
    
    K --> L{विदेशी राज्यको जवाफ}
    L -->|स्वीकृत| M[सहायता प्राप्त]
    L -->|अस्वीकृत| N[इन्कार जानकारी]
    
    M --> O[कूटनैतिक माध्यमबाट नेपाललाई जानकारी]
    O --> P[परराष्ट्र मन्त्रालयमा प्राप्त]
    P --> Q[केन्द्रीय अधिकारी समक्ष पेश]
    
    Q --> R[केन्द्रीय अधिकारीद्वारा कागजात अध्ययन र रूजु]
    R --> S{कागजात रीतपूर्वक छन्?}
    
    S -->|छन्| T[सम्बन्धित जिल्ला सरकारी वकील कार्यालयमा पठाउने]
    S -->|छैनन्| U[थप विवरण वा स्पष्टीकरण माग]
    U --> O
    
    T --> V[जिल्ला सरकारी वकीलद्वारा अदालतमा निवेदन]
    V --> W[अदालतद्वारा सहायता ग्रहण]
    
    W --> X{सहायता पर्याप्त छ?}
    X -->|छ| Y[मुद्दामा प्रमाणको रूपमा प्रयोग]
    X -->|छैन| Z[थप सहायता आवश्यक]
    Z --> C
    
    N --> AA[केन्द्रीय अधिकारी मार्फत अदालतलाई जानकारी]
    AA --> BB[वैकल्पिक उपायको खोजी]
    BB --> CC[अन्य उपलब्ध प्रमाणको आधारमा निर्णय]

    %% Style definitions with better contrast
    style A fill:#e6f3ff,stroke:#000000,stroke-width:2px,color:#000000
    style B fill:#fff2e6,stroke:#000000,stroke-width:2px,color:#000000
    style C fill:#e6ffe6,stroke:#000000,stroke-width:2px,color:#000000
    style H fill:#fff2e6,stroke:#000000,stroke-width:2px,color:#000000
    style L fill:#fff2e6,stroke:#000000,stroke-width:2px,color:#000000
    style S fill:#fff2e6,stroke:#000000,stroke-width:2px,color:#000000
    style X fill:#fff2e6,stroke:#000000,stroke-width:2px,color:#000000
    
    %% Adding style to regular nodes for better readability
    classDef default fill:#ffffff,stroke:#000000,stroke-width:1px,color:#000000

</pre>
</div>
      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>
<div class="container">
    <h1>MLA process in Nepal</h1>
    <div class="chart">
        <pre class="mermaid">
flowchart TD
    A[Case Pending in Court] --> B{Is Mutual Legal Assistance Required?}
    B -->|Yes| C[Court Order]
    B -->|No| D[Case Proceeds through Normal Process]
    
    C --> E[Request to Central Authority]
    
    E --> F[Collection of Required Details and Documents]
    F --> G[Document Authentication]
    
    G --> H{Bilateral Treaty Exists?}
    H -->|Yes| I[Request as per Treaty]
    H -->|No| J[Assurance of Reciprocity]
    
    I --> K[Request to Foreign State through Diplomatic Channel]
    J --> K
    
    K --> L{Foreign State's Response}
    L -->|Approved| M[Assistance Received]
    L -->|Rejected| N[Rejection Notice]
    
    M --> O[Notification to Nepal through Diplomatic Channel]
    O --> P[Received at Ministry of Foreign Affairs]
    P --> Q[Submission to Central Authority]
    
    Q --> R[Document Review and Verification by Central Authority]
    R --> S{Are Documents Properly Formatted?}
    
    S -->|Yes| T[Forward to Concerned District Government Attorney Office]
    S -->|No| U[Request for Additional Information/Clarification]
    U --> O
    
    T --> V[Petition Filed in Court by District Government Attorney]
    V --> W[Court Acceptance of Assistance]
    
    W --> X{Is Assistance Sufficient?}
    X -->|Yes| Y[Use as Evidence in Case]
    X -->|No| Z[Additional Assistance Required]
    Z --> C
    
    N --> AA[Court Notified through Central Authority]
    AA --> BB[Search for Alternative Measures]
    BB --> CC[Decision Based on Other Available Evidence]

    %% Style definitions with better contrast
    style A fill:#e6f3ff,stroke:#000000,stroke-width:2px,color:#000000
    style B fill:#fff2e6,stroke:#000000,stroke-width:2px,color:#000000
    style C fill:#e6ffe6,stroke:#000000,stroke-width:2px,color:#000000
    style H fill:#fff2e6,stroke:#000000,stroke-width:2px,color:#000000
    style L fill:#fff2e6,stroke:#000000,stroke-width:2px,color:#000000
    style S fill:#fff2e6,stroke:#000000,stroke-width:2px,color:#000000
    style X fill:#fff2e6,stroke:#000000,stroke-width:2px,color:#000000
    
    %% Adding style to regular nodes for better readability
    classDef default fill:#ffffff,stroke:#000000,stroke-width:1px,color:#000000

</pre>
</div>
      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>
     <div class="container">
        <h1>नेपालमा नागरिकता</h1>
        <div class="chart">
            <pre class="mermaid">
                flowchart TD
                A["नागरिकताको प्रकार\n(धारा १०.२)"]
                
                A -->|एकल संघीय नागरिकता| B["नागरिक ठहरिने आधारहरू\n(धारा ११)"]
                
                B --> C["वंशजको आधारमा\n(धारा ११.२)"]
                B --> D["अंगीकृत नागरिकता\n(धारा ११.६,७,८)"]
                B --> E["सम्मानार्थ नागरिकता\n(धारा ११.९)"]
                
                C --> F["पहिले नै नागरिकता\nप्राप्त गरेको"]
                C --> G["जन्म हुँदा बाबु वा\nआमा नेपाली नागरिक"]
                C --> H["पितृत्व/मातृत्व ठेगान\nनभएको नाबालक"]
                
                D --> I["विदेशी महिला-नेपाली\nनागरिकसँग विवाह"]
                D --> J["विदेशी बाबु र\nनेपाली आमाबाट जन्म"]
                D --> K["अन्य कानून बमोजिम"]
                
                L["विशेष प्रावधानहरू"]
                
                L --> M["गैरआवासीय नागरिकता\n(धारा १४)"]
                L --> N["लैंगिक पहिचान सहितको\nनागरिकता\n(धारा १२)"]
                L --> O["नेपालमा गाभिएका क्षेत्रका\nव्यक्तिहरू\n(धारा ११.१०)"]
                
                style A fill:#f9f,stroke:#333,stroke-width:2px
                style B fill:#ffd700,stroke:#333,stroke-width:2px
                style L fill:#98fb98,stroke:#333,stroke-width:2px
</pre>
</div>
           <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>
<div class="container">
    <h1>Citizenship in Nepal</h1>
    <div class="chart">
        <pre class="mermaid">

            flowchart TD
    A["Right to Citizenship\n(Article 10)"]
    
    A --> B["Single Federal Citizenship\nwith Provincial Identity\n(10.2)"]
    
    B --> C["Types of Citizenship\n(Article 11)"]
    
    C --> D["Citizenship by Descent\n(11.2)"]
    C --> E["Naturalized Citizenship\n(11.6, 11.7, 11.8)"]
    C --> F["Honorary Citizenship\n(11.9)"]
    
    D --> G["Automatic Qualification\n- Person who has already acquired citizenship\n- Person whose father/mother was citizen at birth\n(11.2.a, 11.2.b)"]
    D --> H["Child Found in Nepal\n- Unknown parentage\n- Until parents identified\n(11.4)"]
    D --> I["Special Provision\n- Born to Nepali mother in Nepal\n- Father unidentified\n(11.5)"]
    
    E --> J["Foreign Women\n- Married to Nepali citizen\n- As per federal law\n(11.6)"]
    E --> K["Children of Nepali Mother\n- Born to foreign father\n- Permanent residence in Nepal\n- Haven't acquired foreign citizenship\n(11.7)"]
    E --> L["Other Naturalization\n- As per federal law\n(11.8)"]
    
    M["Special Categories"]
    
    M --> N["Non-Resident Nepali Citizenship\n- For former citizens/descendants\n- Excluding SAARC nations\n- Economic, social & cultural rights\n(14)"]
    
    M --> O["Gender Identity Provision\n- Can obtain citizenship certificate\n- Through father or mother's name\n(12)"]
    
    M --> P["Territorial Integration\n- Residents of merged territories\n- As per federal law\n(11.10)"]
    
    Q["Other Provisions\n(13, 15)"]
    
    Q --> R["Acquisition, Reacquisition\nand Termination\n- As per federal law\n(13)"]
    
    Q --> S["Documentation\n- Mandatory citizen records\n- Other provisions as per federal law\n(15)"]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#ffd700,stroke:#333,stroke-width:2px
    style M fill:#98fb98,stroke:#333,stroke-width:2px
    style Q fill:#87ceeb,stroke:#333,stroke-width:2px

</pre>
</div>
      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>

    <div class="container">
    <h1>Power Sharing in Federal Nepal</h1>
    <div class="chart">
        <pre class="mermaid">
            flowchart TD
            A["Federal Democratic Republic of Nepal\n(Article 56)"]
            
            A --> B1["Federal Level\n(Schedule 5)"]
            A --> B2["Provincial Level\n(Schedule 6)"]
            A --> B3["Local Level\n(Schedule 8)"]
            
            B1 --> C1["Federal Powers\n- Exclusive rights\n- Residual powers\n(Article 58)"]
            
            B2 --> C2["Provincial Structure\n- As per Schedule 4\n- District based"]
            
            B3 --> C3["Local Structure\n- Rural Municipality\n- Municipality\n- District Assembly"]
            
            D["Power Distribution\n(Article 57)"]
            
            D --> E1["Concurrent Powers"]
            E1 --> F1["Federal-Provincial\n(Schedule 7)"]
            E1 --> F2["Federal-Provincial-Local\n(Schedule 9)"]
            
            G["Financial Powers\n(Article 59)"]
            
            G --> H1["Budget Rights\n- All levels prepare own budget\n- Provincial & local timing as per federal law"]
            
            G --> H2["Resource Management\n- Equitable distribution\n- Priority to local investment\n- Foreign aid/loans by federal govt"]
            
            I["Revenue Distribution\n(Article 60)"]
            
            I --> J1["Revenue Collection\n- All levels within jurisdiction\n- Shared subjects as per federal law"]
            
            I --> J2["Financial Transfers\n- Equalization grants\n- Conditional grants\n- Complementary grants\n- Special grants"]
            
            style A fill:#f9f,stroke:#333,stroke-width:2px
            style D fill:#ffd700,stroke:#333,stroke-width:2px
            style G fill:#98fb98,stroke:#333,stroke-width:2px
            style I fill:#87ceeb,stroke:#333,stroke-width:2px
</pre>
</div>
          <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>
<div class="container">
    <h1>Federal Legislature</h1>
    <div class="chart">
        <pre class="mermaid">
            flowchart TD
    A["Federal Parliament\n(Article 83)"]
    
    A --> B1["House of Representatives\n275 Members\n(Article 84)"]
    A --> B2["National Assembly\n59 Members\n(Article 86)"]
    
    B1 --> C1["Election System\n- 165 FPTP\n- 110 Proportional\n(84.1)"]
    B1 --> C2["Term: 5 Years\n(85.1)"]
    
    B2 --> D1["Permanent House\n(86.1)"]
    B2 --> D2["6-Year Term\n1/3 Members Retire\nEvery 2 Years\n(86.3)"]
    
    E["Leadership"]
    E --> F1["HoR Speaker &\nDeputy Speaker\n(91)"]
    E --> F2["NA Chair &\nDeputy Chair\n(92)"]
    
    G["Parliamentary Powers"]
    
    G --> H1["Impeachment\n(101)"]
    G --> H2["Vote of Confidence\n(100)"]
    G --> H3["Parliamentary\nPrivileges\n(103)"]
    
    I["Session & Quorum"]
    
    I --> J1["Session Called by\nPresident\n(93)"]
    I --> J2["Quorum: 1/4 of\nTotal Members\n(94)"]
    
    K["Committees"]
    
    K --> L1["Parliamentary\nCommittees\n(97.1)"]
    K --> L2["Joint Committees\n(97.2)"]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style G fill:#ffd700,stroke:#333,stroke-width:2px
    style I fill:#98fb98,stroke:#333,stroke-width:2px
    style K fill:#87ceeb,stroke:#333,stroke-width:2px

</pre>
</div>
      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
</div>

<div class="container">
    <h1>Federal Financial Procedure</h1>
    <div class="chart">
        <pre class="mermaid">

            flowchart TD
    A["Federal Financial System\n(Articles 115-125)"]
    
    A --> B["Revenue & Taxation\n(Article 115)"]
    B --> B1["No Tax Without Law\n(115.1)"]
    B --> B2["No Loans Without Federal Law\n(115.2)"]
    
    B2 --> C["Federal Consolidated Fund\n(Article 116)"]
    C --> C1["All Government Revenues"]
    C --> C2["All Loans Received"]
    C --> C3["All Other Government Receipts"]
    
    C3 --> D["Expenditure Methods\n(Article 117)"]
    D --> D1["Charged Expenditure\n(Does not require parliamentary approval)"]
    D --> D2["Appropriation Act\n(Requires parliamentary approval)"]
    D --> D3["Vote on Account\n(For ongoing budget discussion period)"]
    D --> D4["Exceptional Expenditure\n(For emergency situations)"]
    
    D4 --> E["Charged Expenditure Categories\n(Article 118)"]
    E --> E1["Constitutional Officials\n- President & Vice President\n- Chief Justice & Judges\n- Speaker & Deputy Speaker\n- Constitutional Bodies"]
    E --> E2["Government Obligations\n- Debt Servicing\n- Court Decisions\n- Administrative Expenses"]
    
    E2 --> F["Budget Process\n(Article 119)"]
    F --> F1["Annual Revenue Estimates"]
    F --> F2["Annual Expenditure Estimates"]
    F --> F3["Presentation by Finance Minister\nby Jestha 15"]
    
    F3 --> G["Supplementary Provisions"]
    G --> G1["Supplementary Budget\n(Article 121)\n- For insufficient allocations\n- For new services\n- For excess expenditure"]
    G --> G2["Vote on Account\n(Article 122)\n- Maximum 1/3 of annual estimates"]
    G --> G3["Contingency Fund\n(Article 124)\n- For emergency expenses"]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#ffd700,stroke:#333,stroke-width:2px
    style C fill:#98fb98,stroke:#333,stroke-width:2px
    style D fill:#87ceeb,stroke:#333,stroke-width:2px
    style E fill:#dda0dd,stroke:#333,stroke-width:2px
    style F fill:#90ee90,stroke:#333,stroke-width:2px
    style G fill:#ffa07a,stroke:#333,stroke-width:2px

        </pre>
    </div>
   <p><i> सङ्कलनकर्ता: शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
    </div>
     <div class="container">
    <h1>नेपाल कानून आयोग पूर्वको इतिहास</h1>
    <div class="chart">
        <pre class="mermaid">
timeline
    title कानून आयोग पूर्वको नेपालको कानूनी इतिहास
    
    section किराँत काल
        प्राचीन : किराँत मुन्धुम : किराँत समुदायको पवित्र ग्रन्थद्वारा शासन सञ्चालन
            : धार्मिक र सामाजिक नियमहरूको प्रयोग
    
    section लिच्छवि काल in AD
        मध्य युग : धर्मशास्त्र आधारित : विभिन्न धर्मशास्त्र अनुसार न्याय प्रशासन
            : राजाज्ञाको प्रयोग : धर्मशास्त्रले नसमेटेका विषयमा राजाज्ञा जारी
        विशेष : राजा अंशुवर्माको योगदान : विद्वानहरूसँग छलफल गरी लोक व्यवहार अनुसार कानून निर्माण
    
    section मल्ल काल in AD
        1380 : जयस्थिति मल्लको योगदान : विद्वानहरूको समिति गठन
            : चार प्रमुख कानून : गृह निर्णय, क्षेत्र निर्णय, जात निर्णय र मानव न्यायशास्त्र
        
    section शाह काल in AD
        1606 : राम शाहको योगदान : गोर्खा राज्यमा विभिन्न थितिको व्यवस्था
            : "न्याय नपाए गोर्खा जानु" भन्ने लोकोक्तिको विकास
    
    section राणा काल in AD
        1854 : जंग बहादुर राणाको योगदान : कौशल अड्डा गठन (२१० जना पदाधिकारी)
            : मुलुकी ऐन जारी : नेपालको पहिलो संहिताबद्ध कानून
        1936 : कम्पनी ऐन जारी
        1937 : पेटेण्ट, डिजाइन र ट्रेडमार्क ऐन जारी
        1938 : नेपाल बैंक सम्बन्धी ऐन जारी
        
    section प्रजातन्त्र युग  in BS
        2007 : प्रजातन्त्रको स्थापना : कानून सुधारको क्षेत्रमा विशेष प्रयास सुरु
        2009 : बुच कमिसन : कानून आयोग गठनको पहिलो औपचारिक सिफारिस
            : आधुनिक कानून प्रणालीको जग बसाल्ने प्रयास
    
                       </pre>
    </div>
   <p><i> सङ्कलनकर्ता: शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
    </div>
    <div class="container">
    <h1>नेपाल कानून आयोगको विकासक्रम</h1>
    <div class="chart">
        <pre class="mermaid">
            timeline
    title नेपाल कानून आयोगको विस्तृत विकासक्रम (२००९-२०८१)
    
    section बुच कमिसन युग
        2009 : कानून आयोग गठनको सिफारिस : बुच कमिसनले नेपालमा पहिलो पटक कानून आयोग गठनको औपचारिक सिफारिस गर्यो
        
    section ल कमिसन युग
        2010 : पहिलो ल कमिसन स्थापना : बडाकाजी माणिकलाल राजभण्डारीको अध्यक्षतामा गठन
            : तीन विशेष सेक्सन स्थापना (देवानी, फौजदारी र मालपोत विषयक)
            : मासिक तीन पटक बैठक अनिवार्य
        2012 : नेपाल दण्ड विधान : पहिलो महत्वपूर्ण मस्यौदा तयार
        2017 : दोस्रो ल कमिसन : सर्वोच्च अदालतका न्यायाधीश नयनबहादुर खत्रीको अध्यक्षतामा गठन
            : नयाँ मुलुकी ऐनको मस्यौदा तयारी र कानूनको आधुनिकीकरणको थालनी
            
    section कानून आयोग युग
        2020 : तेस्रो कानून आयोग : विनोदप्रसाद धितालको अध्यक्षतामा गठन
            : कानून अध्ययन र अनुसन्धानको थप जिम्मेवारी प्राप्त
        2027 : कार्यकाल समाप्ति : तेस्रो कानून आयोगको कार्यकाल समाप्त
        2029 : चौथो कानून आयोग : नयनबहादुर खत्रीको पुनः अध्यक्षतामा गठन
            : प्रमाण ऐन र अपराध संहिताको महत्वपूर्ण मस्यौदा तयार
        2033 : विघटन : चौथो कानून आयोगको विघटन
        
    section सुधार आयोग युग
        2036 : कानून सुधार आयोग : विश्वनाथ उपाध्यायको अध्यक्षतामा गठन
            : अपराध संहिता र कार्यविधि संहिताको अध्यावधिक
        2041 : स्थायी आयोग : पहिलो पटक स्थायी संस्थाको रूपमा स्थापना
            : विश्वनाथ उपाध्यायकै नेतृत्वमा निरन्तरता
        2057 : कार्यकाल समाप्ति : स्थायी कानून सुधार आयोगको कार्यकाल समाप्त
        2059 : पुनर्गठन : निरञ्जन थापाको अध्यक्षतामा पुनर्गठन
            : न्याय परिषद सचिव र नायब महान्यायाधिवक्ता पदेन सदस्यको रूपमा थप
            
    section वर्तमान आयोग
        2063 : नेपाल कानून आयोग : नेपाल कानून आयोग ऐन, २०६३ द्वारा स्थापना
            : वैधानिक र स्थायी संस्थाको रूपमा विकास
            : विस्तृत कार्यक्षेत्र र अधिकार प्राप्त
            : अध्यक्ष, उपाध्यक्ष र सदस्यहरूको स्पष्ट व्यवस्था
        2081 : वर्तमान अवस्था : कानून निर्माण, संहिताकरण र अनुसन्धानमा सक्रिय
            : प्रभावकारी संरचना र विस्तारित कार्यक्षेत्र
            : देशको प्रमुख कानूनी थिंक ट्यांकको रूपमा स्थापित

                   </pre>
    </div>
   <p><i> सङ्कलनकर्ता: शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
    </div> 

   
<div class="container">
    <h1>पाण्डवको वंशावली</h1>
    <div class="chart">
        <pre class="mermaid">

            graph TB
    %% Main styles
    classDef male fill:#2471A3,stroke:#333,stroke-width:2px,color:white
    classDef female fill:#DB7093,stroke:#333,stroke-width:2px,color:white
    classDef marriage fill:none,stroke:#333,stroke-width:2px,stroke-dasharray: 5 5
    classDef divine fill:#229954,stroke:#333,stroke-width:2px,color:white
    classDef death fill:#8B0000,stroke:#333,stroke-width:2px,color:white
    classDef survived fill:#006400,stroke:#333,stroke-width:2px,color:white

    %% Divine fathers and parents level
    subgraph DivineAndParents[" "]
        Yam[/"यम"\] & Vayu[/"वायु"\] & Indra[/"इन्द्र"\] & Ashwini[/"अश्विनीकुमार"\]
        Pandu(("पाण्डु")) --- Marriage1{{"♥"}} --- Kunti(("कुन्ती"))
        Pandu --- Marriage2{{"♥"}} --- Madri(("माद्री"))
    end

    %% Pandavas level
    subgraph Pandavas[" "]
        Yudhishthir(("युधिष्ठिर")) & Bhim(("भीम")) & Arjun(("अर्जुन")) & Nakul(("नकुल")) & Sahadev(("सहदेव"))
    end

    %% Wives level
    subgraph Wives[" "]
        Draupadi(("द्रौपदी"))
        Hidimba(("हिडिम्बा"))
        Balnika(("बलनिका"))
        Chitrangada(("चित्रांगदा"))
        Ulupi(("उलूपी"))
        Subhadra(("सुभद्रा"))
    end

    %% Children level
    subgraph Children[" "]
        Prativindhya[/"प्रतिविन्ध्य
        ✝ अश्वत्थामाद्वारा"\]
        
        SrutkirtiFD[/"श्रुतकीर्ति
        ✝ अश्वत्थामाद्वारा"\]
        
        Ghatotkach[/"घटोत्कच
        ✝ कर्णको वासवी शक्तिद्वारा"\]
        
        Sutsom[/"सुतसोम
        ✝ अश्वत्थामाद्वारा"\]
        
        SrutkirtiAD[/"श्रुतकीर्ति
        ✝ अश्वत्थामाद्वारा"\]
        
        Babhruvan[["बभ्रुवाहन
        ★ मणिपुरका राजा"]]
        
        Iravan[/"इरावान
        ✝ अलायुधद्वारा"\]
        
        Abhimanyu[/"अभिमन्यु
        ✝ चक्रव्यूहमा"\]
        
        Shatanik[/"शतानीक
        ✝ अश्वत्थामाद्वारा"\]
        
        Shrutkarm[/"श्रुतकर्मा
        ✝ अश्वत्थामाद्वारा"\]
    end

    %% Relationships
    Yam -.-> Yudhishthir
    Vayu -.-> Bhim
    Indra -.-> Arjun
    Ashwini -.-> Nakul & Sahadev

    Kunti --> Yudhishthir & Bhim & Arjun
    Madri --> Nakul & Sahadev

    %% Marriages and children
    Yudhishthir --- Draupadi --> Prativindhya
    Bhim --- Draupadi --> SrutkirtiFD
    Bhim --- Hidimba --> Ghatotkach
    Bhim --- Balnika --> Sutsom
    
    Arjun --- Draupadi --> SrutkirtiAD
    Arjun --- Chitrangada --> Babhruvan
    Arjun --- Ulupi --> Iravan
    Arjun --- Subhadra --> Abhimanyu
    
    Nakul --- Draupadi --> Shatanik
    Sahadev --- Draupadi --> Shrutkarm

    %% Apply styles
    class Pandu,Yudhishthir,Bhim,Arjun,Nakul,Sahadev male
    class Kunti,Madri,Draupadi,Hidimba,Balnika,Chitrangada,Ulupi,Subhadra female
    class Marriage1,Marriage2 marriage
    class Yam,Vayu,Indra,Ashwini divine
    class Prativindhya,SrutkirtiFD,Ghatotkach,Sutsom,SrutkirtiAD,Iravan,Abhimanyu,Shatanik,Shrutkarm death
    class Babhruvan survived
            </pre>
    </div>
      <p><i> सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१) <br> सर्वोच्च अदालत </i></p>
    </div>
     
    <script >
        document.addEventListener("DOMContentLoaded", () => {
  // Add an event listener for user interaction or dynamic customization
  console.log("Mermaid chart rendered successfully!");

  // Example: Highlight a node when clicked
  document.querySelector(".chart").addEventListener("click", (e) => {
      if (e.target.tagName === "text") {
          const node = e.target;
          node.setAttribute("fill", "red");
          setTimeout(() => node.setAttribute("fill", ""), 2000);
      }
  });
    </script>
</body>
</html>



`;

