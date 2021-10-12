

#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels
#define OLED_RESET -1    // GPIO0
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
WiFiClient wifiClient;

//const char* ssid = "WLANrouter";
//const char* password = "testtest";
const char *ssid = "Hotspot°";
const char *password = "123456789";

void setup()
{

    Serial.begin(115200);
    display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
    delay(2000);

    display.display();
    display.clearDisplay();

    WiFi.begin(ssid, password); //WiFi connection

    while (WiFi.status() != WL_CONNECTED)
    { //Wait for the WiFI connection completion

        delay(500);
        Serial.println("Waiting for connection");
    }
    Serial.println("connected");
}

const int dry = 720; // messured -> air
const int wet = 300; // messured -> water
int moisture = 0;

void pushRequest()
{
    int moistureValue = moisture;

    if (WiFi.status() == WL_CONNECTED)
    { //Check WiFi connection status

        HTTPClient http; //Declare object of class HTTPClient

        http.begin(wifiClient, "http://jsonplaceholder.typicode.com/users"); //Specify request destination
        http.addHeader("Content-Type", "text/plain");                        //Specify content-type header
        char *httpRequestData = (char *)moistureValue;
        int httpResponseCode = http.POST(httpRequestData); //Send the request

        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode);

        http.end(); //Close connection
    }
    else
    {

        Serial.println("Error in WiFi connection");
    }
    delay(30000); //Send a request every 30 seconds
    Serial.print(moistureValue);
}

void loop()
{
    delay(2000);
    moisture = analogRead(0);
    float moisturePercent = 100 - ((float)moisture - (float)wet) / ((float)dry - (float)wet) * 100;

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

    void pushRequest(int moisture);
}
