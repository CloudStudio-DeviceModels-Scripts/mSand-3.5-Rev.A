function getConfiguration(config) {
    // Esta función permite indicar valores de configuración generales para 
    // todos los dispositivos de este modelo.

    // Dependiendo del significado de la "dirección del dispositivo" en este 
    // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
    // para hacer referencia a la dirección en la interfaz de usuario.
    // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
    // MAC, es posible que desee utilizar el código siguiente.

    config.addressLabel = {en: "Serial Number", es: "Número de Serie"};
}

function getEndpoints(deviceAddress, endpoints) {
    // Esta función le permite indicar la configuración inicial de los endpoints
    // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
    // la experiencia del usuario final, ya que permite a la plataforma crear 
    // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
    // crea el dispositivo.

    // En el código siguiente, se crean dos endpoints. El primero es un sensor de 
    // temperatura, mientras que el segundo es un sensor de dióxido de carbono.
    
        endpoints.addEndpoint("FIRMWARE", {en: "Firmware version", es: "Versión de firmware"}, endpointType.genericSensor)
              .variableTypeId = 1085; 
    endpoints.addEndpoint("SERIAL_LSW", {en: "Serial number LSW", es: "Número de serie LSW"}, endpointType.genericSensor)
              .variableTypeId = 1085; 
    endpoints.addEndpoint("SERIAL_MSW", {en: "Serial number MSW", es: "Número de serie MSW"}, endpointType.genericSensor)
              .variableTypeId = 1085; 
    endpoints.addEndpoint("ALTERNATIVE_USE", {en: "Alternative of use", es: "Uso alternativo"}, endpointType.genericSensor)
              .variableTypeId = 1086; 
    endpoints.addEndpoint("SSQ", {en: "Sand separators quantity", es: "cantidad de Sand separators"}, endpointType.genericSensor)
              .variableTypeId = 1085; 
    endpoints.addEndpoint("OPMODE", {en: "Operational mode", es: "Modo de operación"}, endpointType.genericSensor)
              .variableTypeId = 1087; 
    endpoints.addEndpoint("CURRENT_PROCESS", {en: "Current process", es: "Proceso actual"}, endpointType.genericSensor)
              .variableTypeId = 1088; 
    endpoints.addEndpoint("STATUS", {en: "General status", es: "Estado general"}, endpointType.genericSensor)
              .variableTypeId = 1100; 
    endpoints.addEndpoint("DUMPS", {en: "Dump counter", es: "Contador de vaciados"}, endpointType.genericSensor)
              .variableTypeId = 1100; 
    endpoints.addEndpoint("PV1", {en: "PV1 Status", es: "Estado de PV1"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("PV2", {en: "PV2 Status", es: "Estado de PV2"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("CV3", {en: "CV3 Status", es: "Estado de CV3"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("PV1_SS1", {en: "SS1 PV1´ Status", es: "Estado de SS1 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("PV1_SS2", {en: "SS2 PV1´ Status", es: "Estado de SS2 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("PV1_SS3", {en: "SS3 PV1´ Status", es: "Estado de SS3 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("PV1_SS4", {en: "SS4 PV1´ Status", es: "Estado de SS4 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("SIEVE_STATUS", {en: "Sieve Status", es: "Estado de sieve"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("PT3_SS1", {en: "SS1 PT3 Current Value", es: "Valor actual de SS1 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS2", {en: "SS2 PT3 Current Value", es: "Valor actual de SS2 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS3", {en: "SS3 PT3 Current Value", es: "Valor actual de SS3 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS4", {en: "SS4 PT3 Current Value", es: "Valor actual de SS4 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS1", {en: "SS1 PT2 Current Value", es: "Valor actual de SS1 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS2", {en: "SS2 PT2 Current Value", es: "Valor actual de SS2 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS3", {en: "SS3 PT2 Current Value", es: "Valor actual de SS3 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS4", {en: "SS4 PT2 Current Value", es: "Valor actual de SS4 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS5", {en: "SS5 PT3 Current Value", es: "Valor actual de SS5 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS6", {en: "SS6 PT3 Current Value", es: "Valor actual de SS6 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS7", {en: "SS7 PT3 Current Value", es: "Valor actual de SS7 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT3_SS8", {en: "SS8 PT3 Current Value", es: "Valor actual de SS8 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT1", {en: "PT1 Current Value", es: "Valor actual de PT1"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("WGT1_MW8", {en: "mW8 WG1 Current Value", es: "Valor actual de mW8 WG1"}, endpointType.weightSensor); 
    endpoints.addEndpoint("PT2_SS5", {en: "SS5 PT2 Current Value", es: "Valor actual de SS5 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS6", {en: "SS6 PT2 Current Value", es: "Valor actual de SS6 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS7", {en: "SS7 PT2 Current Value", es: "Valor actual de SS7 PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("PT2_SS8", {en: "SS8 PT2 Current Value", es: "Valor actual de SS8 PT2 "}, endpointType.pressureSensor); 
    endpoints.addEndpoint("AP", {en: "SS8 PT3 Current Value", es: "Valor actual de SS8 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("AP_MMS", {en: "SS8 PT3 Current Value", es: "Valor actual de SS8 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("AP_MW8", {en: "SS8 PT3 Current Value", es: "Valor actual de SS8 PT3"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("CB", {en: "mSand Control Battery", es: "Batería de control de mSand"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("CB_MMS", {en: "MMS Control Battery", es: "Batería de control de MMS"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("CB_MW8", {en: "mW8 Control Battery", es: "Batería de control de mW8"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("PB", {en: "mSand Power Battery", es: "Potencia de Batería de mSand"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("PB_MMS", {en: "MMS Power Battery", es: "Potencia de Batería de MMS"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("PB_MW8", {en: "mW8 Power Battery", es: "Potencia de Batería de mW8"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("CT", {en: "mSand Cabinet Temperature", es: "Temperatura del Gabinete de mSand"}, endpointType.temperatureSensor); 
    endpoints.addEndpoint("TBD_SS1", {en: "SS1 Time Between Dumps", es: "Tiempo entre vaciados de SS1"}, endpointType.genericSensor)
              .variableTypeId = 1090; 
    endpoints.addEndpoint("TBD_SS2", {en: "SS2 Time Between Dumps", es: "Tiempo entre vaciados de SS2"}, endpointType.genericSensor)
              .variableTypeId = 1090; 
    endpoints.addEndpoint("TBD_SS3", {en: "SS3 Time Between Dumps", es: "Tiempo entre vaciados de SS3"}, endpointType.genericSensor)
              .variableTypeId = 1090; 
    endpoints.addEndpoint("TBD_SS4", {en: "SS4 Time Between Dumps", es: "Tiempo entre vaciados de SS4"}, endpointType.genericSensor)
              .variableTypeId = 1090; 
    endpoints.addEndpoint("DPT3PT2_SS1", {en: "SS1 - Differential PT3-PT2", es: "SS1 - Diferencial PT3-PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("DPT3PT2_SS2", {en: "SS2 - Differential PT3-PT2", es: "SS2 - Diferencial PT3-PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("DPT3PT2_SS3", {en: "SS3 - Differential PT3-PT2", es: "SS3 - Diferencial PT3-PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("DPT3PT2_SS4", {en: "SS4 - Differential PT3-PT2", es: "SS4 - Diferencial PT3-PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("HIPT3_SS1", {en: "SS1 - High PT3", es: "SS1 - PT3 Alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("HIPT3_SS2", {en: "SS2 - High PT3", es: "SS2 - PT3 Alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("HIPT3_SS3", {en: "SS3 - High PT3", es: "SS3 - PT3 Alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("HIPT3_SS4", {en: "SS4 - High PT3", es: "SS4 - PT3 Alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("HIPT3_SS5", {en: "SS5 - High PT3", es: "SS5 - PT3 Alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("HIPT3_SS6", {en: "SS6 - High PT3", es: "SS6 - PT3 Alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("HIPT3_SS7", {en: "SS7 - High PT3", es: "SS7 - PT3 Alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("HIPT3_SS8", {en: "SS8 - High PT3", es: "SS8 - PT3 Alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("H_HIPT3_SS1", {en: "SS1 - High high PT3", es: "SS1 - PT3 Alto alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("H_HIPT3_SS2", {en: "SS2 - High high PT3", es: "SS2 - PT3 Alto alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("H_HIPT3_SS3", {en: "SS3 - High high PT3", es: "SS3 - PT3 Alto alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("H_HIPT3_SS4", {en: "SS4 - High high PT3", es: "SS4 - PT3 Alto alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("DHP_SS1", {en: "SS1 - Dump Holding Period", es: "Período de retención de vaciado de SS1"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("DHP_SS2", {en: "SS2 - Dump Holding Period", es: "Período de retención de vaciado de SS2"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("DHP_SS3", {en: "SS3 - Dump Holding Period", es: "Período de retención de vaciado de SS3"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("DHP_SS4", {en: "SS4 - Dump Holding Period", es: "Período de retención de vaciado de SS4"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("DPT1_SS1", {en: "SS1 - Delta PT1 to end dump", es: "SS1 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1092; 
    endpoints.addEndpoint("DPT1_SS2", {en: "SS2 - Delta PT1 to end dump", es: "SS2 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1092; 
    endpoints.addEndpoint("DPT1_SS3", {en: "SS3 - Delta PT1 to end dump", es: "SS3 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1092; 
    endpoints.addEndpoint("DPT1_SS4", {en: "SS4 - Delta PT1 to end dump", es: "SS4 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1092; 
    endpoints.addEndpoint("TTD_SS1", {en: "SS1 - Time to drain", es: "Tiempo para drenar SS1"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("TTD_SS2", {en: "SS2 - Time to drain", es: "Tiempo para drenar SS2"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("TTD_SS3", {en: "SS3 - Time to drain", es: "Tiempo para drenar SS3"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("TTD_SS4", {en: "SS4 - Time to drain", es: "Tiempo para drenar SS4"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("HP_ST", {en: "Holding Period For Valve Seat Test", es: "Período de espera para prueba de asientamiento de la válvula"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("VT", {en: "Vent timeout", es: "Tiempo de espera de ventilación"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("DPT1_TEST", {en: "Delta PT1 for test", es: "Delta PT1 para la prueba"}, endpointType.genericSensor)
              .variableTypeId = 1092; 
    endpoints.addEndpoint("EMPTYING_TIME_MW8", {en: "mW8 Hopper Emptying Time", es: "Tiempo de vaciado de la tolva de mW8"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("PV1_SS5", {en: "SS5 PV1´ Status", es: "Estado de PV1´ de SS5"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("PV1_SS6", {en: "SS6 PV1´ Status", es: "Estado de PV1´ de SS6"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("PV1_SS7", {en: "SS7 PV1´ Status", es: "Estado de PV1´ de SS7"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("PV1_SS8", {en: "SS8 PV1´ Status", es: "Estado de PV1´ de SS8"}, endpointType.genericSensor)
              .variableTypeId = 1089; 
    endpoints.addEndpoint("P1", {en: "P1 Current Value", es: "Valor actual de P1"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("AP_MMS2", {en: "MMS2 AP Current Value", es: "Valor actual de AP MMS2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("CB_MMS2", {en: "MMS2 Control Battery", es: "Batería de control de MMS2"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("PB_MMS2", {en: "MMS2 Power Battery", es: "Poder de Batería de MMS2"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("P1PT1IV", {en: "P1/PT1 Incorrect Value", es: "Valor incorrecto P1/PT1"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("TW_SS1", {en: "SS1 - Tare Weight", es: "Peso de Tara de SS1"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS1", {en: "SS1 - Initial Weight", es: "Peso incial de SS1"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS1", {en: "SS1 - Drained Weight", es: "Peso escurrido de SS1"}, endpointType.weightSensor); 
    endpoints.addEndpoint("TW_SS2", {en: "SS2 - Tare Weight", es: "Peso de Tara de SS2"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS2", {en: "SS2 - Initial Weight", es: "Peso incial de SS2"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS2", {en: "SS2 - Drained Weight", es: "Peso escurrido de SS2"}, endpointType.weightSensor); 
    endpoints.addEndpoint("TW_SS3", {en: "SS3 - Tare Weight", es: "Peso de Tara de SS3"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS3", {en: "SS3 - Initial Weight", es: "Peso incial de SS3"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS3", {en: "SS3 - Drained Weight", es: "Peso escurrido de SS3"}, endpointType.weightSensor); 
    endpoints.addEndpoint("TW_SS4", {en: "SS4 - Tare Weight", es: "Peso de Tara de SS4"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS4", {en: "SS4 - Initial Weight", es: "Peso incial de SS4"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS4", {en: "SS4 - Drained Weight", es: "Peso escurrido de SS4"}, endpointType.weightSensor); 
    endpoints.addEndpoint("TW_SS5", {en: "SS5 - Tare Weight", es: "Peso de Tara de SS5"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS5", {en: "SS5 - Initial Weight", es: "Peso incial de SS5"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS5", {en: "SS5 - Drained Weight", es: "Peso escurrido de SS5"}, endpointType.weightSensor); 
    endpoints.addEndpoint("TW_SS6", {en: "SS6 - Tare Weight", es: "Peso de Tara de SS6"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS6", {en: "SS6 - Initial Weight", es: "Peso incial de SS6"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS6", {en: "SS6 - Drained Weight", es: "Peso escurrido de SS6"}, endpointType.weightSensor); 
    endpoints.addEndpoint("TW_SS7", {en: "SS7 - Tare Weight", es: "Peso de Tara de SS7"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS7", {en: "SS7 - Initial Weight", es: "Peso incial de SS7"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS7", {en: "SS7 - Drained Weight", es: "Peso escurrido de SS7"}, endpointType.weightSensor); 
    endpoints.addEndpoint("TW_SS8", {en: "SS8 - Tare Weight", es: "Peso de Tara de SS8"}, endpointType.weightSensor); 
    endpoints.addEndpoint("IW_SS8", {en: "SS8 - Initial Weight", es: "Peso incial de SS8"}, endpointType.weightSensor); 
    endpoints.addEndpoint("DW_SS8", {en: "SS8 - Drained Weight", es: "Peso escurrido de SS8"}, endpointType.weightSensor); 
    endpoints.addEndpoint("TBD_SS5", {en: "SS5 Time Between Dumps", es: "Tiempo entre vaciados de SS5"}, endpointType.genericSensor)
              .variableTypeId = 1090; 
    endpoints.addEndpoint("TBD_SS6", {en: "SS6 Time Between Dumps", es: "Tiempo entre vaciados de SS6"}, endpointType.genericSensor)
              .variableTypeId = 1090; 
    endpoints.addEndpoint("TBD_SS7", {en: "SS7 Time Between Dumps", es: "Tiempo entre vaciados de SS7"}, endpointType.genericSensor)
              .variableTypeId = 1090; 
    endpoints.addEndpoint("TBD_SS8", {en: "SS8 Time Between Dumps", es: "Tiempo entre vaciados de SS8"}, endpointType.genericSensor)
              .variableTypeId = 1090; 
    endpoints.addEndpoint("DPT3PT2_SS5", {en: "SS5 - Differential PT3-PT2", es: "SS5 - Diferencial PT3-PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("DPT3PT2_SS6", {en: "SS6 - Differential PT3-PT2", es: "SS6 - Diferencial PT3-PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("DPT3PT2_SS7", {en: "SS7 - Differential PT3-PT2", es: "SS7 - Diferencial PT3-PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("DPT3PT2_SS8", {en: "SS8 - Differential PT3-PT2", es: "SS8 - Diferencial PT3-PT2"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("H_HIPT3_SS5", {en: "SS5 - High high PT3", es: "SS5 - PT3 Alto alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("H_HIPT3_SS6", {en: "SS6 - High high PT3", es: "SS6 - PT3 Alto alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("H_HIPT3_SS7", {en: "SS7 - High high PT3", es: "SS7 - PT3 Alto alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("H_HIPT3_SS8", {en: "SS8 - High high PT3", es: "SS8 - PT3 Alto alto"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("DHP_SS5", {en: "SS5 - Dump Holding Period", es: "Período de retención de vaciado de SS5"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("DHP_SS6", {en: "SS6 - Dump Holding Period", es: "Período de retención de vaciado de SS6"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("DHP_SS7", {en: "SS7 - Dump Holding Period", es: "Período de retención de vaciado de SS7"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("DHP_SS8", {en: "SS8 - Dump Holding Period", es: "Período de retención de vaciado de SS8"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("DPT1_SS5", {en: "SS5 - Delta PT1 to end dump", es: "SS5 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1092; 
    endpoints.addEndpoint("DPT1_SS6", {en: "SS6 - Delta PT1 to end dump", es: "SS6 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1092; 
    endpoints.addEndpoint("DPT1_SS7", {en: "SS7 - Delta PT1 to end dump", es: "SS7 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1092; 
    endpoints.addEndpoint("DPT1_SS8", {en: "SS8 - Delta PT1 to end dump", es: "SS8 - Delta PT1 para terminar vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1092; 
    endpoints.addEndpoint("TTD_SS5", {en: "SS5 - Time to drain", es: "Tiempo para drenar SS5"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("TTD_SS6", {en: "SS6 - Time to drain", es: "Tiempo para drenar SS6"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("TTD_SS7", {en: "SS7 - Time to drain", es: "Tiempo para drenar SS7"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("TTD_SS8", {en: "SS8 - Time to drain", es: "Tiempo para drenar SS8"}, endpointType.genericSensor)
              .variableTypeId = 1091; 
    endpoints.addEndpoint("ALARMS", {en: "There are alarms", es: "Hay Alarmas"}, endpointType.genericSensor)
              .variableTypeId = 1093; 
    endpoints.addEndpoint("A_H_HIPT3_SS1", {en: "High high SS1 PT3", es: "Alto alto de SS1 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_H_HIPT3_SS2", {en: "High high SS2 PT3", es: "Alto alto de SS2 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_H_HIPT3_SS3", {en: "High high SS3 PT3", es: "Alto alto de SS3 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_H_HIPT3_SS4", {en: "High high SS4 PT3", es: "Alto alto de SS4 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_1_FAIL", {en: "PV1 operation failure", es: "Falla de operación de PV1"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_2_FAIL", {en: "PV2 operation failure", es: "Falla de operación de PV2"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_3_FAIL", {en: "CV3 operation failure", es: "Falla de operación de CV3"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_1_SS1", {en: "SS1 PV1´ operation failure", es: "Falla de operación de SS1 PV1´"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_1_SS2", {en: "SS2 PV1´ operation failure", es: "Falla de operación de SS12 PV1´"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_1_SS3", {en: "SS3 PV1´ operation failure", es: "Falla de operación de SS3 PV1´"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_1_SS4", {en: "SS4 PV1´ operation failure", es: "Falla de operación de SS4 PV1´"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS1", {en: "SS1 PT3 sensor disconnected", es: "Sensor desconectado de SS1 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS2", {en: "SS2 PT3 sensor disconnected", es: "Sensor desconectado de SS2 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS3", {en: "SS3 PT3 sensor disconnected", es: "Sensor desconectado de SS3 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS4", {en: "SS4 PT3 sensor disconnected", es: "Sensor desconectado de SS4 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS1", {en: "SS1 PT2 sensor disconnected", es: "Sensor desconectado de SS1 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS2", {en: "SS2 PT2 sensor disconnected", es: "Sensor desconectado de SS2 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS3", {en: "SS3 PT2 sensor disconnected", es: "Sensor desconectado de SS3 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS4", {en: "SS4 PT2 sensor disconnected", es: "Sensor desconectado de SS4 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT1_DISCONNECTED", {en: "PT1 sensor disconnected", es: "Sensor desconectado de PT1"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_H_HIPT3_SS5", {en: "High high SS5 PT3", es: "Alto alto SS5 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_H_HIPT3_SS6", {en: "High high SS6 PT3", es: "Alto alto SS6 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_H_HIPT3_SS7", {en: "High high SS7 PT3", es: "Alto alto SS7 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_H_HIPT3_SS8", {en: "High high SS8 PT3", es: "Alto alto SS8 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_WGT1_DISCONNECTED_MW8", {en: "mW8 WG1 sensor disconnected", es: "Sensor desconectado de mW8 WG1"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_AP_DISCONNECTED_MMS2", {en: "MMS2 AP sensor disconnected", es: "Sensor desconectado de MMS2 AP"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_BC_LOW_VOLTAGE_MMS2", {en: "MMS2 CB battery low voltage", es: "Voltaje bajo de batería de MMS2 CB"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_PB_LOW_VOLTAGE_MMS2", {en: "MMS2 PB battery low voltage", es: "Voltaje bajo de batería de MMS2 PB"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_AP_DISCONNECTED", {en: "mSand AP sensor disconnected", es: "Sensor desconectado de mSand AP"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_AP_DISCONNECTED_MMS", {en: "MMS AP sensor disconnected", es: "Sensor desconectado de MMS AP"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_AP_DISCONNECTED_MW8", {en: "mW8 AP sensor disconnected", es: "Sensor desconectado de mW8 AP"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL", {en: "mSand Hydraulic System Failure", es: "Falla del sistema hidraulico de mSand"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL_MMS", {en: "MMS Hydraulic System Failure", es: "Falla del sistema hidraulico de MMS"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL_MW8", {en: "mW8 Hydraulic System Failure", es: "Falla del sistema hidraulico de mW8"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_BC_LOW_VOLTAGE", {en: "mSand CB battery low voltage", es: "Voltaje bajo de batería de mSand CB"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_BC_LOW_VOLTAGE_MMS", {en: "MMS CB battery low voltage", es: "Voltaje bajo de batería de MMS CB"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_BC_LOW_VOLTAGE_MW8", {en: "mW8 CB battery low voltage", es: "Voltaje bajo de batería de mW8 CB"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_PB_LOW_VOLTAGE", {en: "mSand PB battery low voltage", es: "Voltaje bajo de batería de mSand PB"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_PB_LOW_VOLTAGE_MMS", {en: "MMS PB battery low voltage", es: "Voltaje bajo de batería de MMS PB"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_PB_LOW_VOLTAGE_MW8", {en: "mW8 PB battery low voltage", es: "Voltaje bajo de batería de mW8 PB"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_1_SEAT_TEST_FAIL", {en: "Test - PV1 seat test unsuccessful", es: "Prueba de asentamiento de PV1 fallida"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_2_SEAT_TEST_FAIL", {en: "Test - PV2 seat test unsuccessful", es: "Prueba de asentamiento de PV2 fallida"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VENT_FAIL", {en: "Test - Vent Fail", es: "Falla de prueba de ventilación"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_DUMP_SS1", {en: "Dump SS1 Command Acknowledgement", es: "Confirmación de comando de volcado de SS1"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_DUMP_SS2", {en: "Dump SS2 Command Acknowledgement", es: "Confirmación de comando de volcado de SS2"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_DUMP_SS3", {en: "Dump SS3 Command Acknowledgement", es: "Confirmación de comando de volcado de SS3"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_DUMP_SS4", {en: "Dump SS4 Command Acknowledgement", es: "Confirmación de comando de volcado de SS4"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_TEST", {en: "Test Command Acknowledgement", es: "Confirmación de comando de prueba"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_STOP", {en: "Stop Command Acknowledgement", es: "Confirmación de comando de parada"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_RST_ERR", {en: "Reset Command Acknowledgement", es: "Confirmación de comando de reinicio"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_RST_A", {en: "Clear Alarms Command Acknowledgement", es: "Confirmación de comando de borrar alarmas"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_LINE_VOLTAGE", {en: "mSand - Line Voltage", es: "Voltaje de línea de mSand"}, endpointType.genericSensor)
              .variableTypeId = 1096; 
    endpoints.addEndpoint("A_LINE_VOLTAGE_MMS", {en: "MMS - Line Voltage", es: "Voltaje de línea de MMS"}, endpointType.genericSensor)
              .variableTypeId = 1096; 
    endpoints.addEndpoint("A_FULL_TANK", {en: "Full tank", es: "Tanque lleno"}, endpointType.genericSensor)
              .variableTypeId = 1097; 
    endpoints.addEndpoint("S_TBD_SS1", {en: "SS1 - Time Between Dumps", es: "Tiempo entre vaciados de SS1"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_TBD_SS2", {en: "SS2 - Time Between Dumps", es: "Tiempo entre vaciados de SS2"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_TBD_SS3", {en: "SS3 - Time Between Dumps", es: "Tiempo entre vaciados de SS3"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_TBD_SS4", {en: "SS4 - Time Between Dumps", es: "Tiempo entre vaciados de SS4"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_DPT3PT2_SS1", {en: "SS1 - Differential PT3-PT2", es: "SS1 - Diferencial PT3-PT2"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_DPT3PT2_SS2", {en: "SS2 - Differential PT3-PT2", es: "SS2 - Diferencial PT3-PT2"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_DPT3PT2_SS3", {en: "SS3 - Differential PT3-PT2", es: "SS3 - Diferencial PT3-PT2"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_DPT3PT2_SS4", {en: "SS4 - Differential PT3-PT2", es: "SS4 - Diferencial PT3-PT2"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_HIPT3_SS1", {en: "SS1 - High PT3", es: "SS1 - PT3 Alto"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_HIPT3_SS2", {en: "SS2 - High PT3", es: "SS2 - PT3 Alto"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_HIPT3_SS3", {en: "SS3 - High PT3", es: "SS3 - PT3 Alto"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_HIPT3_SS4", {en: "SS4 - High PT3", es: "SS4 - PT3 Alto"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_TBD_SS5", {en: "SS5 - Time Between Dumps", es: "Tiempo entre vaciados de SS5"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_TBD_SS6", {en: "SS6 - Time Between Dumps", es: "Tiempo entre vaciados de SS6"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_TBD_SS7", {en: "SS7 - Time Between Dumps", es: "Tiempo entre vaciados de SS7"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_TBD_SS8", {en: "SS8 - Time Between Dumps", es: "Tiempo entre vaciados de SS8"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_PDC_SS1", {en: "SS1 - Pressure Drop Closing", es: "SS1 - Cierre por caida de presión"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_PDC_SS2", {en: "SS2 - Pressure Drop Closing", es: "SS2 - Cierre por caida de presión"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_PDC_SS3", {en: "SS3 - Pressure Drop Closing", es: "SS3 - Cierre por caida de presión"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_PDC_SS4", {en: "SS4 - Pressure Drop Closing", es: "SS4 - Cierre por caida de presión"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_AUTO_SEAT_TEST", {en: "Automatic Test PV1&PV2", es: "Test automático PV1&PV2"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("CMD_DUMP_SS1", {en: "Dump SS1 Command", es: "Comando 'vaciado de SS1"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("CMD_DUMP_SS2", {en: "Dump SS2 Command", es: "Comando 'vaciado de SS2"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("CMD_DUMP_SS3", {en: "Dump SS3 Command", es: "Comando 'vaciado de SS3"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("CMD_DUMP_SS4", {en: "Dump SS4 Command", es: "Comando 'vaciado de SS4"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("CMD_TEST", {en: "Test Command", es: "Comando 'test'"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("CMD_STOP", {en: "Stop Command", es: "Comando 'parar'"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("CMD_RST_ERR", {en: "Reset Command (Quit Error Mode)", es: "Comando de reinicio (salir de modo error)"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("CMD_RST_DUMPS", {en: "Clear Dump Counter Command", es: "Comando 'borrar contador de vaciados'"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("CMD_RST_A", {en: "Clear Alarms Command", es: "Comando 'borrar alarmas'"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("A_VALVE_1_SS5", {en: "SS5 PV1´ operation failure", es: "Fallo de funcionaminto de SS5 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_1_SS6", {en: "SS6 PV1´ operation failure", es: "Fallo de funcionaminto de SS6 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_1_SS7", {en: "SS7 PV1´ operation failure", es: "Fallo de funcionaminto de SS7 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_1_SS8", {en: "SS8 PV1´ operation failure", es: "Fallo de funcionaminto de SS8 PV1"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_SIEVE_FAIL_MW8", {en: "MW8 Sieve operation failure", es: "MW8 Falla en funcionamiento del sieve"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS5", {en: "SS5 PT3 sensor", es: "Sensor SS5 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS6", {en: "SS6 PT3 sensor", es: "Sensor SS6 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS7", {en: "SS7 PT3 sensor", es: "Sensor SS7 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT3_DISCONNECTED_SS8", {en: "SS8 PT3 sensor", es: "Sensor SS58 PT3"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS5", {en: "SS5 PT2 sensor", es: "Sensor SS5 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS6", {en: "SS6 PT2 sensor", es: "Sensor SS6 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS7", {en: "SS7 PT2 sensor", es: "Sensor SS7 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_PT2_DISCONNECTED_SS8", {en: "SS8 PT2 sensor", es: "Sensor SS8 PT2"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_P1_DISCONNECTED", {en: "P1 sensor", es: "Sensor P1"}, endpointType.genericSensor)
              .variableTypeId = 1095; 
    endpoints.addEndpoint("A_HYDRAULIC_SYSTEM_FAIL_MMS2", {en: "MMS2 Hydraulic System Failure", es: "MMS2 Falla en sistema hidráulico"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_VALVE_X_SEAT_TEST_FAIL", {en: "Test - SSx PV1' seat test unsuccessful", es: "Test - SSx PV1' seat test unsuccessful"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_DUMP_SS5", {en: "Dump SS5 Command Acknowledgement", es: "SS5 - Confirmacion de comando de vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_DUMP_SS6", {en: "Dump SS6 Command Acknowledgement", es: "SS6 - Confirmacion de comando de vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_DUMP_SS7", {en: "Dump SS7 Command Acknowledgement", es: "SS7 - Confirmacion de comando de vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("ACK_DUMP_SS8", {en: "Dump SS8 Command Acknowledgement", es: "SS8 - Confirmacion de comando de vaciado"}, endpointType.genericSensor)
              .variableTypeId = 1094; 
    endpoints.addEndpoint("A_LINE_VOLTAGE_MW8", {en: "MW8 - Line Voltage", es: "MW8 - Tensión de linea"}, endpointType.genericSensor)
              .variableTypeId = 1096; 
    endpoints.addEndpoint("A_LINE_VOLTAGE_MMS2", {en: "MMS2 - Line Voltage", es: "MMS2 - Tensión de linea"}, endpointType.genericSensor)
              .variableTypeId = 1096; 
    endpoints.addEndpoint("A_FULL_TANK_MW8", {en: "MW8 - Full tank", es: "MW8 - Tanque lleno"}, endpointType.genericSensor)
              .variableTypeId = 1097; 
    endpoints.addEndpoint("S_CONFIG_MAINT", {en: "In Config./Maintenance", es: "En Config./Mantenimiento"}, endpointType.genericSensor)
              .variableTypeId = 1097; 
    endpoints.addEndpoint("S_ENABLED_SS1", {en: "SS1", es: "SS1"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_ENABLED_SS2", {en: "SS2", es: "SS2"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_ENABLED_SS3", {en: "SS3", es: "SS3"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_ENABLED_SS4", {en: "SS4", es: "SS4"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_ENABLED_SS5", {en: "SS5", es: "SS5"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_ENABLED_SS6", {en: "SS6", es: "SS6"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_ENABLED_SS7", {en: "SS7", es: "SS7"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_ENABLED_SS8", {en: "SS8", es: "SS8"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_DPT3PT2_SS5", {en: "SS5 - Differential PT3-PT2", es: "SS5 - Diferencial PT3-PT2"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_DPT3PT2_SS6", {en: "SS6 - Differential PT3-PT2", es: "SS6 - Diferencial PT3-PT2"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_DPT3PT2_SS7", {en: "SS7 - Differential PT3-PT2", es: "SS7 - Diferencial PT3-PT2"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_DPT3PT2_SS8", {en: "SS8 - Differential PT3-PT2", es: "SS8 - Diferencial PT3-PT2"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_HIPT3_SS5", {en: "SS5 - High PT3", es: "SS5 - Alto PT3"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_HIPT3_SS6", {en: "SS6 - High PT3", es: "SS6 - Alto PT3"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_HIPT3_SS7", {en: "SS7 - High PT3", es: "SS7 - Alto PT3"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_HIPT3_SS8", {en: "SS8 - High PT3", es: "SS8 - Alto PT3"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_PDC_SS5", {en: "SS5 - Pressure Drop Closing", es: "SS5 - Cierre por caida de presión"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_PDC_SS6", {en: "SS6 - Pressure Drop Closing", es: "SS6 - Cierre por caida de presión"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_PDC_SS7", {en: "SS7 - Pressure Drop Closing", es: "SS7 - Cierre por caida de presión"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("S_PDC_SS8", {en: "SS8 - Pressure Drop Closing", es: "SS8 - Cierre por caida de presión"}, endpointType.genericSensor)
              .variableTypeId = 1098; 
    endpoints.addEndpoint("CMD_DUMP_SS5", {en: "Dump SS5 Command", es: "Comando de vaciado SS5"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("CMD_DUMP_SS6", {en: "Dump SS6 Command", es: "Comando de vaciado SS6"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("CMD_DUMP_SS7", {en: "Dump SS7 Command", es: "Comando de vaciado SS7"}, endpointType.genericSensor)
              .variableTypeId = 1099; 
    endpoints.addEndpoint("CMD_DUMP_SS8", {en: "Dump SS8 Command", es: "Comando de vaciado SS8"}, endpointType.genericSensor)
              .variableTypeId = 1099; 

    
}

function validateDeviceAddress(address, result) {
    // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
    // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
    // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
    // caso de que el formato de la dirección sea incorrecto.

    // En el código siguiente, se realiza una validación para asegurarse de que la 
    // dirección tiene exactamente 10 caracteres.

    // if (address.length != 10) {
    //   result.ok = false;
    //   result.errorMessage = {
    //     en: "The address must be 10 characters long", 
    //     es: "La dirección debe tener exactamente 10 caracteres"
    //   };
    // }
}

function updateDeviceUIRules(device, rules) {
    // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
    // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
    // de endpoints manualmente al dispositivo después de que se creó.

    // En el código siguiente, el agregado manual de endpoints está deshabilitada 
    // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
    // endpoints definidos por la función getEndpoints() anterior.

    // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules) {
    // Esta función permite especificar reglas de interfaz de usuario para cada
    // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
    // eliminación de endpoints, o la edición de subtipo de endpoint.

    // En el código siguiente, se definen las siguientes reglas:
    // - Los endpoints no se pueden eliminar.
    // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.

    // rules.canDelete = false;
    // rules.canEditSubType = (endpoint.address == "2");
}