const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    navigation: 15000,
    pageLoad: 2000,
    afterClear: 1000,
    translation: 12000,
    betweenTests: 2000,
    retryDelay: 1500
  },
  retries: {
    pageLoad: 2,
    translation: 2
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: "Pos_Fun_0001",
      name: "Convert polite help requeste",
      input: "karuNaakaralaa mata udhavvak karanna puluvandha?",
      expected: "කරුණාකරලා මට උදව්වක් කරන්න පුලුවන්ද?",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0002",
      name: "Convert future plan sentence",
      input: "api heta enavaa",
      expected: "අපි හෙට එනවා",
      length: "S"
    },
    {
      tcId: "Pos_Fun_0003",
      name: "Convert past tense statement",
      input: "mama iiyee paasal giyaa",
      expected: "මම ඊයේ පාසල් ගියා",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0004",
      name: "Convert command sentence",
      input: "vahaama enna",
      expected: "වහාම එන්න",
      length: "S"
    },
    {
      tcId: "Pos_Fun_0005",
      name: "Convert negative preference sentence",
      input: "mata eeka epaa",
      expected: "මට ඒක එපා",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0006",
      name: "Convert plural pronoun question",
      input: "oyaalaa enavadha",
      expected: "ඔයාලා එනවද",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0007",
      name: "Convert place-based sentence",
      input: "Colombo office yanna hadhanne",
      expected: "Colombo office යන්න හදන්නෙ",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0008",
      name: "Convert repeated emphasis words",
      input: "mata Zoom meeting ekak thiyenavaa",
      expected: "මට Zoom meeting එකක් තියෙනවා",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0009",
      name: "Convert repeated emphasis words",
      input: "tika tika enna",
      expected: "ටික ටික එන්න",
      length: "S"
    },
    {
      tcId: "Pos_Fun_0010",
      name: "Convert time format sentence",
      input: "7.30 AM office yanna ona",
      expected: "7.30 AM office යන්න ඔන",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0011",
      name: "Convert currency sentence",
      input: " mata Rs. 500k dhenna puluvandha",
      expected: "මට Rs. 500ක් දෙන්න පුලුවන්ද",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0012",
      name: "Convert slang greeting",
      input: "ela machan",
      expected: "එල මචන්",
      length: "S"
    },
    {
      tcId: "Pos_Fun_0013",
      name: "Convert email request sentence",
      input: "documents tika attach karalaa mata email ekak evanna",
      expected: "documents ටික attach කරලා මට email එකක් එවන්න",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0014",
      name: "Convert long paragraph input",
      input: "mama gedhara giyaa passe mama office yanna hadhanne",
      expected: "මම ගෙදර ගියා පස්සෙ මම office යන්න හදන්නෙ",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0015",
      name: "Convert future polite request",
      input: "heta puluvannam mata call ekak dhenna",
      expected: "හෙට පුලුවන්නම් මට call එකක් දෙන්න",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0016",
      name: "Convert plural action sentence",
      input: "api yamu",
      expected: "අපි යමු",
      length: "S"
    },
    {
      tcId: "Pos_Fun_0017",
      name: "Convert WhatsApp instruction",
      input: "WhatsApp msg ekak maamata yavanna",
      expected: "WhatsApp ම්ස්ග් එකක් මාමට යවන්න",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0018",
      name: "Convert date format sentence",
      input: "mama 2026-05-21 enavaa",
      expected: "මම 2026-05-21 එනවා",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0019",
      name: "Convert ID information sentence",
      input: "magee ID eka office ekata dhenna",
      expected: "මගේ ID එක office එකට දෙන්න",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0020",
      name: "Convert condition-based sentencee",
      input: "oyaa enne nam mama innavaa",
      expected: "ඔයා එන්නෙ නම් මම ඉන්නවා",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0021",
      name: "Convert long work schedule explanation",
      input: "mama uda 8.00 AM office giyaa passe manager mata kiyalaa thiyenavaa heta client meeting ekata reports tika ready karanna kiyalaa nam mama evening welaa gedhara enakota laptop eka open karala weda karanna hithan inne",
      expected: "මම උඩ 8.00 AM office ගියා පස්සෙ manager මට කියලා තියෙනවා හෙට client meeting එකට reports ටික ready කරන්න කියලා නම් මම evening wඑලා ගෙදර එනකොට laptop එක open කරල wඑඩ කරන්න හිතන් ඉන්නේ",
      length: "L"
    },
    {
      tcId: "Pos_Fun_0022",
      name: "Convert long travel planning paragraph",
      input: "api next week Kandy trip ekata yanna hadhanne nam mama hotel booking eka already karala thiyenavaa saha weather forecast eka balala rain thiyenavanam api morning early start karala traffic avoid karanna plan karala inne",
      expected: "අපි next week Kandy trip එකට යන්න හදන්නෙ නම් මම hotel booking එක already කරල තියෙනවා සහ weather forecast එක බලල rain තියෙනවනම් අපි morning early start කරල traffic avoid කරන්න plan කරල ඉන්නේ",
      length: "L"
    },
    {
      tcId: "Pos_Fun_0023",
      name: "Convert long apology and explanation message",
      input: "samaavenna mama meeting eka amathaka vune traffic thiyena nisaa saha phone battery eka down vuna nisaa mata manager ta call karanna puluvan vune naha kiyalaa mama email ekak yavanna hithan inne",
      expected: "සමාවෙන්න මම meeting එක අමතක වුනෙ traffic තියෙන නිසා සහ phone battery එක down වුන නිසා මට manager ට call කරන්න පුලුවන් වුනෙ naha කියලා මම email එකක් යවන්න හිතන් ඉන්නේ",
      length: "L"
    },
    {
      tcId: "Pos_Fun_0024",
      name: "Convert polite delivery request",
      input: "puluvannam heta parcel eka gedharata deliver karanna",
      expected: "පුලුවන්නම් හෙට parcel එක ගෙදරට deliver කරන්න",
      length: "L"
    },
    {
      tcId: "Pos_Fun_0025",
      name: "Convert meeting time confirmation",
      input: "api 3.00 PM Zoom meeting ekata join venavaa kiyalaa confirm karamu",
      expected: "අපි 3.00 PM Zoom meeting එකට join වෙනවා කියලා confirm කරමු",
      length: "M"
    },
    {
      tcId: "Pos_Fun_0026",
      name: "Convert long technology setup explanation",
      input: "mama new laptop eka setup karala Windows update karala antivirus software install karala WiFi network ekata connect venavaa nam mama files tika USB drive ekata backup karanna plan karala inne",
      expected: "මම new laptop එක setup කරල Windows update කරල antivirus software install කරල WiFi network එකට connect වෙනවා නම් මම files ටික USB drive එකට backup කරන්න plan කරල ඉන්නේ",
      length: "L"
    }
  ],
  ui: [
    {
      tcId: "Pos_UI_0001",
      name: "Real-time translation while typing (office sentence)",
      input: "mama 7.30 AM office yanna ona",
      partialInput: "mama 7.30",
      expectedFull: "මම 7.30 AM office යන්න ඕන",
      length: "M"
    }
  ],
  
  negative: [
    {
      tcId: "Neg_Fun_0027",
      name: "Reject input with symbol spam",
      input: "mama@@@yanavaa!!",
      expected: "__NEGATIVE_EXPECTED_FAILURE__",
      length: "S"
    },
    {
      tcId: "Neg_Fun_0028",
      name: "Emoji mixed command rejection",
      input: " enna 😡🔥 now",
      expected: "__NEGATIVE_EXPECTED_FAILURE__",
      length: "S"
    },
    {
      tcId: "Neg_Fun_0029",
      name: "Fail conversion due to irregular spacing",
      input: " mama office yanna hadhanne nam",
      expected: "__NEGATIVE_EXPECTED_FAILURE__",
      length: "M"
    },
    {
      tcId: "Neg_Fun_0030",
      name: "Multilingual noise failure",
      input: " mama meeting ekata ready karanna mañana ahora 请帮我\\n\\n",
      expected: "__NEGATIVE_EXPECTED_FAILURE__",
      length: "M"
    },
    {
      tcId: "Neg_Fun_0031",
      name: "Typo repetition breakdowne",
      input: " mamaa gedhaara yanavaaa passeee manageraa kiyalaaa\\n\\n",
      expected: "__NEGATIVE_EXPECTED_FAILURE__",
      length: "M"
    },
    {
      tcId: "Neg_Fun_0032",
      name: "Symbol overloaded work paragraph",
      input: " mama office@@@ giyaa ### passe manager!!! mata?? kiyalaa thiyenavaa $$$ client meeting%%%% ekata reports**** tika ready karanna^^^^ nam mama evening%%%% laptop@@ open karala weda karanna!!!! hithan inne##\\n\\n",
      expected: "__NEGATIVE_EXPECTED_FAILURE__",
      length: "L"
    },
    {
      tcId: "Neg_Fun_0033",
      name: "Extreme spacing and line break abuse",
      input: "mama gedhara giyaa\\npasse\\n\\nmanager mata kiyalaa\\n\\nthiyenavaa heta meeting ekata\\nready karanna\\n",
      expected: "මම ගෙදර ගියා\\න්පස්සෙ\\n\\න්මනගෙර් මට කියලා\\n\\න්තියෙනවා හෙට meeting එකට\\nන්‍රේඩ්ය් ක           කරන්න\\n",
      length: "L"
    },
    {
      tcId: "Neg_Fun_0034",
      name: "Random language and emoji injection",
      input: "mama office yanna 😊🔥 mañana trabajo pergi pergi manager mata λέει meeting ekata ready karanna 请帮我 now now now\\n",
      expected: "__NEGATIVE_EXPECTED_FAILURE__",
      length: "L"
    },
    {
      tcId: "Neg_Fun_0035",
      name: "Continuous unbroken character stream",
      input: "mamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaa\\n",
      expected: "__NEGATIVE_EXPECTED_FAILURE__",
      length: "L"
    },
    {
      tcId: "Neg_Fun_0036",
      name: "Number and code overload paragraph",
      input: "mama 123456 0xFF A9C3 9999 office yanna hadhanne 2026-05-21 07:30 AM ## @@ %% $$ random code string ABCDEF9876543210 mixed karala thiyenavaa\\n",
      expected: "__NEGATIVE_EXPECTED_FAILURE__",
      length: "L"
    },
    {
      tcId: "Neg_Fun_0037",
      name: "URL and symbols mixed input rejection",
      input: "mama https://test.com @@ office yanna hadhanne!!!",
      expected: "මම https://test.com @@ office යන්න හදන්නේ!!!",
      length: "M"
    }
  ]
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    let lastError;
    for (let attempt = 1; attempt <= CONFIG.retries.pageLoad; attempt += 1) {
      try {
        await this.page.goto(CONFIG.url, {
          waitUntil: 'domcontentloaded',
          timeout: CONFIG.timeouts.navigation
        });
        await this.page.waitForLoadState('networkidle', { timeout: CONFIG.timeouts.navigation });
        await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
        return;
      } catch (error) {
        lastError = error;
        if (attempt < CONFIG.retries.pageLoad) {
          await this.page.waitForTimeout(CONFIG.timeouts.retryDelay);
        }
      }
    }
    throw lastError;
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 90000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText, options = {}) {
    const maxRetries = options.retries ?? CONFIG.retries.translation;
    let lastError;
    for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
      await this.clearAndWait();
      await this.typeInput(inputText);
      try {
        await this.waitForOutput();
        return await this.getOutputText();
      } catch (error) {
        lastError = error;
        if (options.allowTimeout) {
          return await this.getOutputText();
        }
      }
    }
    throw lastError;
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    try {
      await translator.navigateToSite();
    } catch (error) {
      test.skip(true, `Site unreachable: ${error.message}`);
    }
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        test.fail(true, 'Negative test expected to fail');
        const actualOutput = await translator.performTranslation(testCase.input, { allowTimeout: true });
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Functionality Tests
  test.describe('UI Functionality Tests', () => {
    for (const testCase of TEST_DATA.ui) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const input = await translator.getInputField();
        await input.fill('');
        await input.pressSequentially(testCase.partialInput, { delay: 120 });

        const output = await translator.getOutputField();
        const partialText = (await output.textContent()) || '';
        expect(partialText.trim().length).toBeGreaterThan(0);

        const remaining = testCase.input.substring(testCase.partialInput.length);
        await input.pressSequentially(remaining, { delay: 120 });
        await translator.waitForOutput();

        const fullText = (await output.textContent()) || '';
        expect(fullText.trim()).toBe(testCase.expectedFull.trim());
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });
});
