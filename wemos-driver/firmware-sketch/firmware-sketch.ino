#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels
#define OLED_RESET -1  // GPIO0
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

const int dry = 714; // messured -> air
const int wet = 300; // messured -> water

int moisture = 0;  


void setup()
{
  Serial.begin(115200);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  delay(2000);
  
  display.display();
  display.clearDisplay();
}

void loop()
{
  delay(2000);
  moisture = analogRead(0);
  float moisturePercent = 100 - ( (float)moisture - (float)wet) / ((float)dry - (float)wet)  * 100;
  
  display.clearDisplay();

  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(32, 16);
  display.println("Moisture");

  
  display.setCursor(32, 32);
  display.setTextSize(2);
  display.println(moisture);

  display.setCursor(32, 48);
  display.setTextSize(1);
  display.printf("%.2f %%", moisturePercent);

  Serial.println("Humidity meassured: " + moisture);
  display.display();

}
