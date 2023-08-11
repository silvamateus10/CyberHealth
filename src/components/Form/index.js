import React, {useState} from  "react";
import { 
    Text, 
    TextInput, 
    View, 
    TouchableOpacity,
    Pressable, 
    Keyboard,  
    Button,
    Vibration,
    FlatList
} from "react-native";
import ResultImc from '../Resultimc'
import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura.");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage]  = useState(null);
    const [imcList, setImcList]  = useState([]);
 
async function imcCalculator(){     
    let heightFormat = height.replace(",",".");
    let weightFormat = weight.replace(",",".");
    let totalImc =(weightFormat / (heightFormat * heightFormat)).toFixed(2);
    setImcList ((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}]);
    setImc(totalImc);

}

function verificationImc(){
    if(imc == null){
        Vibration.vibrate(); 
        setErrorMessage("Campo obrigatório")
    }
    
}

async function validationImc(){
    Keyboard.dismiss();
    if(weight != null && height != null){        
        await imcCalculator();                
        setMessageImc("Seu imc é igual: ");
        setTextButton("Calcular novamente");
        limparCampos();
    }else{
        verificationImc();
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha peso e altura.");        
    }
    
}

function limparCampos(){
    setHeight(null);
    setWeight(null);
    setErrorMessage(null);
}

    return(
        
            <View style={styles.formContext}>  

            { imc == null ? //IF
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>                          
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setHeight} // Substitui vírgula por ponto
                value={height}
                placeholder="Ex. 1,75"
                keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput 
                style={styles.formInput}
                onChangeText={setWeight} // Substitui vírgula por ponto
                value={weight}
                placeholder="Ex. 85,500"
                keyboardType="numeric"
                />
                <TouchableOpacity
                 onPress={validationImc}
                 style={styles.buttonCalculator}                  
                >
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>                                         
                </Pressable>
                : //Else 
                <View style={styles.exibitionResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                <TouchableOpacity
                 onPress={validationImc}
                 style={styles.buttonCalculator}                  
                >
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>  
                </View>
                }
                <FlatList 
                showsVerticalScrollIndicator={false}
                style={styles.listImc}
                data={imcList.reverse()}
                renderItem={({item}) => {
                    return(   
                        <Text style={styles.resultImcItem}>                     
                            <Text style={styles.textImcItemList}>
                                Resultado IMC:
                            </Text>        
                             {item.imc.replace(".",",")}    
                        </Text>                            
                    )
                }}
                keyExtractor={(item) =>{
                    return(
                        item.id
                    )
                }}
                >

                </FlatList>
            </View> 
    );
}