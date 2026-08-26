import prisma from '../prismaClient';

export class NotificationService {
  // Ahmet Amca'ya (Hastaya) gidecek hatırlatmalar
  static async sendPatientReminder(patientId: string, message: string, method: 'SMS' | 'WHATSAPP' | 'PUSH') {
    // Gerçekte burada Twilio veya NetGSM API'si tetiklenir
    console.log(`[${method}] Hastaya Giden Mesaj: ${message}`);
    
    await prisma.notification.create({
      data: {
        type: method,
        title: 'İlaç Hatırlatması',
        message,
        patientId
      }
    });
  }

  // Mümessilden Eczaneye gidecek kampanya bildirimleri
  static async sendPharmacyCampaign(pharmacyId: string, repId: string, message: string) {
    // Sistem içi bildirim (Eczacının Dashboard'una düşer)
    console.log(`[SYSTEM] Eczaneye Giden Kampanya (RepID: ${repId}): ${message}`);
    
    await prisma.notification.create({
      data: {
        type: 'SYSTEM',
        title: 'Yeni Mümessil Kampanyası',
        message,
        pharmacyId
      }
    });
  }
}
