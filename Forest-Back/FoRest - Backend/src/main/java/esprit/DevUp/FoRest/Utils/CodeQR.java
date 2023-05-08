package esprit.DevUp.FoRest.Utils;
import esprit.DevUp.FoRest.Entity.Menu;


import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import esprit.DevUp.FoRest.Entity.OffreRestaurant;
import lombok.var;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;

public class CodeQR {
    public static void generateQRCodeMenu(Menu menu) throws WriterException, IOException {
        String qrCodePath = "C:\\Users\\Rayen\\Desktop\\4sae2-devup-dev-up\\image\\QRcodeMenu\\";
        String qrCodeName = qrCodePath+menu.getIdMenu()+"-QRCODE.png";
        var qrCodeWriter = new QRCodeWriter();
        String show = "Menu :"+menu.getPlateName()+menu.getDescription()+menu.getImage();
        BitMatrix bitMatrix =qrCodeWriter.encode(show, BarcodeFormat.QR_CODE,840,420);
        Path path = FileSystems.getDefault().getPath(qrCodeName);
        MatrixToImageWriter.writeToPath(bitMatrix,"PNG",path);
    }
    public static void generateQRCodeOffre(OffreRestaurant offre) throws WriterException, IOException {
        String qrCodePath = "C:\\Users\\Rayen\\Desktop\\4sae2-devup-dev-up\\image\\QRcodeOffreRestaurant\\";
        String qrCodeName = qrCodePath+offre.getNameOffre()+".png";
        var qrCodeWriter = new QRCodeWriter();
        String show =" --Offre Name :"+ offre.getNameOffre()+" -Price :"+offre.getPrice()+" -Numbre of days  :"+offre.getNbrDays()+" -Dinner :"+offre.getDINNER()+" -Lunch :"+offre.getLUNCH()+" -BREAFAST :"+offre.getBREAKFAST();
        BitMatrix bitMatrix =qrCodeWriter.encode(show, BarcodeFormat.QR_CODE,840,420);
        Path path = FileSystems.getDefault().getPath(qrCodeName);
        MatrixToImageWriter.writeToPath(bitMatrix,"PNG",path);
    }
}
