const questions = [
    // BAŞ (İnsan) + ARI
    { q: "<i class='fa-solid fa-user' style='color:#34495e'></i> <span class='plus-sign'>+</span> 🐝", a: "BAŞARI" },

    // BAL + ON
    { q: "🍯 <span class='plus-sign'>+</span> 🔟", a: "BALON" },

    // FİL + İZ (Ayak izi ikonu)
    { q: "🐘 <span class='plus-sign'>+</span> <i class='fa-solid fa-shoe-prints' style='color:#2c3e50'></i>", a: "FİLİZ" },

    // AY (Hilal ikonu) + AK
    { q: "<i class='fa-solid fa-moon' style='color:#f1c40f'></i> <span class='plus-sign'>+</span> ⚪", a: "AYAK" },

    // KAR + TON (Gri Balık İkonu - Ton Balığı)
    { q: "❄️ <span class='plus-sign'>+</span> <i class='fa-solid fa-fish' style='color:#bdc3c7'></i>", a: "KARTON" },

    // KÜP + E
    { q: "<i class='fa-solid fa-cube' style='color:#3498db'></i> <span class='plus-sign'>+</span> E", a: "KÜPE" },

    // KALE + M
    { q: "🏰 <span class='plus-sign'>+</span> M", a: "KALEM" },

    // DENİZ (Su ikonu) + ALTI
    { q: "<i class='fa-solid fa-water' style='color:#00a8ff'></i> <span class='plus-sign'>+</span> 6️⃣", a: "DENİZALTI" },

    // PİL (Pil ikonu) + AV (Nişan alma ikonu)
    { q: "<i class='fa-solid fa-battery-full' style='color:#2ecc71'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-crosshairs' style='color:#e74c3c'></i>", a: "PİLAV" },

    // KOL + YE (Çatal Bıçak ikonu)
    { q: "💪 <span class='plus-sign'>+</span> <i class='fa-solid fa-utensils' style='color:#7f8c8d'></i>", a: "KOLYE" },

    // MAT + ARA (Telefon ikonu)
    { q: "♟️ <span class='plus-sign'>+</span> <i class='fa-solid fa-phone' style='color:#2d3436'></i>", a: "MATARA" },

    // KARA + KALEM
    { q: "⬛ <span class='plus-sign'>+</span> ✏️", a: "KARAKALEM" },

    // KAZ + AK
    { q: "🦆 <span class='plus-sign'>+</span> ⬜", a: "KAZAK" },

    // OT (Yaprak ikonu) + EL (El İkonu)
    { q: "<i class='fa-solid fa-leaf' style='color:#27ae60'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-hand' style='color:#f1c40f'></i>", a: "OTEL" },

    // TEK + EL
    { q: "1️⃣ <span class='plus-sign'>+</span> <i class='fa-solid fa-hand' style='color:#f1c40f'></i>", a: "TEKEL" },

    // TEK + ER
    { q: "1️⃣ <span class='plus-sign'>+</span> 🪖", a: "TEKER" },

    // PAT + AT (At ikonu) + ES
    { q: "💥 <span class='plus-sign'>+</span> <i class='fa-solid fa-horse' style='color:#d35400'></i> <span class='plus-sign'>+</span> ༄", a: "PATATES" },

    { q: "🍯 <span class='plus-sign'>+</span> K <span class='plus-sign'>+</span> 🔟", a: "BALKON" },
    { q: "B <span class='plus-sign'>+</span> 🪖 <span class='plus-sign'>+</span> E", a: "BERE" },

    // AT (At ikonu) + L + ET
    { q: "<i class='fa-solid fa-horse' style='color:#d35400'></i> <span class='plus-sign'>+</span> L <span class='plus-sign'>+</span> 🥩", a: "ATLET" },

    { q: "🎵 <span class='plus-sign'>+</span> ♟️ <span class='plus-sign'>+</span> 🎼", a: "DOMATES" },

    // SOL (Ok) + U + CAN (Kalp)
    { q: "<i class='fa-solid fa-arrow-left' style='color:#2980b9'></i> <span class='plus-sign'>+</span> U <span class='plus-sign'>+</span> <i class='fa-solid fa-heart' style='color:#e74c3c'></i>", a: "SOLUCAN" },

    // M + AN (Saat) + DAL (Ağaç Dalı ikonu)
    { q: "M <span class='plus-sign'>+</span> <i class='fa-regular fa-clock' style='color:#34495e'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-code-branch' style='color:#8e44ad'></i>", a: "MANDAL" },

    // BAK (Göz) + LAV (Volkan) + A
    { q: "<i class='fa-solid fa-eye' style='color:#2c3e50'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-volcano' style='color:#c0392b'></i> <span class='plus-sign'>+</span> A", a: "BAKLAVA" },

    { q: "Ⓜ️ <span class='plus-sign'>+</span> <i class='fa-solid fa-leaf' style='color:#27ae60'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-hand' style='color:#f1c40f'></i>", a: "MOTEL" },
    { q: "B <span class='plus-sign'>+</span> <i class='fa-solid fa-hand' style='color:#f1c40f'></i> <span class='plus-sign'>+</span> A", a: "BELA" },

    // BAL + İN (Uçak İnişi) + A
    { q: "🍯 <span class='plus-sign'>+</span> <i class='fa-solid fa-plane-arrival' style='color:#2c3e50'></i> <span class='plus-sign'>+</span> A", a: "BALİNA" },

    // MANDALİNA
    { q: "Ⓜ️ <span class='plus-sign'>+</span> <i class='fa-regular fa-clock' style='color:#34495e'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-code-branch' style='color:#8e44ad'></i>", a: "MANDAL" },

    // SANDALYE (Ye -> Çatal Bıçak)
    { q: "S <span class='plus-sign'>+</span> <i class='fa-regular fa-clock' style='color:#34495e'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-code-branch' style='color:#8e44ad'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-utensils' style='color:#7f8c8d'></i>", a: "SANDALYE" },

    { q: "❄️ <span class='plus-sign'>+</span> N <span class='plus-sign'>+</span> A <span class='plus-sign'>+</span> 🌸", a: "KARNABAHAR" },
    { q: "💥 <span class='plus-sign'>+</span> L <span class='plus-sign'>+</span> I <span class='plus-sign'>+</span> ❤️", a: "PATLICAN" },
    { q: "💥 <span class='plus-sign'>+</span> <i class='fa-solid fa-horse' style='color:#d35400'></i> <span class='plus-sign'>+</span> E <span class='plus-sign'>+</span> S", a: "PATATES" },
    { q: "✋ <span class='plus-sign'>+</span> D <span class='plus-sign'>+</span> İ <span class='plus-sign'>+</span> V <span class='plus-sign'>+</span> ↔️", a: "ELDİVEN" },
    { q: "T <span class='plus-sign'>+</span> ✋ <span class='plus-sign'>+</span> E <span class='plus-sign'>+</span> F <span class='plus-sign'>+</span> 🔟", a: "TELEFON" },

    // TELEVİZYON: T + EL + EV (Ev ikonu) + İZ (Göz) + Y + ON
    { q: "T <span class='plus-sign'>+</span> ✋ <span class='plus-sign'>+</span> <i class='fa-solid fa-house' style='color:#e67e22'></i> <span class='plus-sign'>+</span> 👁️ <span class='plus-sign'>+</span> Y <span class='plus-sign'>+</span> 🔟", a: "TELEVİZYON" },

    { q: "❄️ <span class='plus-sign'>+</span> A <span class='plus-sign'>+</span> N <span class='plus-sign'>+</span> 🐘", a: "KARANFİL" },

    // GÖKKUŞAĞI: Gök (Bulut) + Kuş + Ağ + I
    { q: "<i class='fa-solid fa-cloud' style='color:#3498db'></i> <span class='plus-sign'>+</span> 🐦 <span class='plus-sign'>+</span> 🕸️ <span class='plus-sign'>+</span> I", a: "GÖKKUŞAĞI" },

    { q: "🔔 <span class='plus-sign'>+</span> ⚪ <span class='plus-sign'>+</span> 🏰", a: "ÇANAKKALE" },
    { q: "🍯 <span class='plus-sign'>+</span> 💂 <span class='plus-sign'>+</span> ⬇️", a: "BALERİN" },
    { q: "💳 <span class='plus-sign'>+</span> 🔟", a: "KARTON" },
    { q: "🍯 <span class='plus-sign'>+</span> 🔟", a: "BALON" },
    { q: "🏁 <span class='plus-sign'>+</span> 🔎", a: "MATARA" },
    { q: "🧣 <span class='plus-sign'>+</span> ✅", a: "ŞALVAR" },
    { q: "🌾 <span class='plus-sign'>+</span> ⌛", a: "SAZAN" },
    { q: "💪 <span class='plus-sign'>+</span> 🔟", a: "KOLON" },
    { q: "🦢 <span class='plus-sign'>+</span> ⌛", a: "KAZAN" },
    { q: "🐦 <span class='plus-sign'>+</span> ⚪", a: "KUŞAK" },
    { q: "👤 <span class='plus-sign'>+</span> ⚪", a: "BAŞAK" },
    { q: "⚪ <span class='plus-sign'>+</span> 🌊", a: "AKDENİZ" },
    { q: "⚫ <span class='plus-sign'>+</span> 💪", a: "KARAKOL" },
    { q: "💪 <span class='plus-sign'>+</span> 🍞", a: "KOLYE" },
    { q: "🌙 <span class='plus-sign'>+</span> ⚪", a: "AYAK" },
    { q: "👤 <span class='plus-sign'>+</span> 🐝", a: "BAŞARI" },
    { q: "🔴 <span class='plus-sign'>+</span> ⌛", a: "ALAN" },
    { q: "🌙 <span class='plus-sign'>+</span> 📉", a: "AYAZ" },

    // ÇEK (Kamera) + İÇ (Bardak)
    { q: "<i class='fa-solid fa-camera' style='color:#34495e'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-glass-water' style='color:#3498db'></i>", a: "ÇEKİÇ" },

    { q: "🪵 <span class='plus-sign'>+</span> ⚪", a: "DALAK" },

    // EV (Ev ikonu) + REN
    { q: "<i class='fa-solid fa-house' style='color:#e67e22'></i> <span class='plus-sign'>+</span> 🦌", a: "EVREN" },

    // GÜN (Güneş) + EŞ (Eşittir)
    { q: "<i class='fa-solid fa-sun' style='color:#f39c12'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-equals' style='color:#2c3e50'></i>", a: "GÜNEŞ" },

    { q: "📞 <span class='plus-sign'>+</span> 🌙", a: "HATAY" },
    { q: "🩸 <span class='plus-sign'>+</span> 🔴", a: "KANAL" },
    { q: "💪 <span class='plus-sign'>+</span> 🌙", a: "KOLAY" },
    { q: "🟣 <span class='plus-sign'>+</span> 🔴", a: "MORAL" },

    // TEL + SİZ (Aile)
    { q: "<i class='fa-solid fa-phone' style='color:#2c3e50'></i> <span class='plus-sign'>+</span> 👨‍👩‍👧‍👦", a: "TELSİZ" },

    // TOP (Futbol topu) + AL
    { q: "<i class='fa-regular fa-futbol' style='color:#2c3e50'></i> <span class='plus-sign'>+</span> 🔴", a: "TOPAL" },

    { q: "✅ <span class='plus-sign'>+</span> 🏙️", a: "VARİL" },
    { q: "⚪ <span class='plus-sign'>+</span> 🧔", a: "AKBABA" },
    { q: "🍯 <span class='plus-sign'>+</span> 🥩", a: "BALET" },
    { q: "❤️ <span class='plus-sign'>+</span> 🪖", a: "CANER" },

    // DİZ (Diz çökmüş adam) + EL
    { q: "<i class='fa-solid fa-person-kneeling' style='color:#34495e'></i> <span class='plus-sign'>+</span> ✋", a: "DİZEL" },

    { q: "🩲 <span class='plus-sign'>+</span> <i class='fa-solid fa-horse' style='color:#d35400'></i>", a: "DONAT" },
    { q: "🪖 <span class='plus-sign'>+</span> 🏨", a: "ERHAN" },
    { q: "🛑 <span class='plus-sign'>+</span> 🩸", a: "KALKAN" },
    { q: "✂️ <span class='plus-sign'>+</span> 🪖", a: "KESER" },
    { q: "💵 <span class='plus-sign'>+</span> 🔴", a: "KURAL" },
    { q: "🧲 <span class='plus-sign'>+</span> ⌛", a: "NALAN" },
    { q: "🔟 <span class='plus-sign'>+</span> 🌙", a: "ONAY" },

    // PİL + İÇ (Bardak)
    { q: "<i class='fa-solid fa-battery-full' style='color:#2ecc71'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-glass-water' style='color:#3498db'></i>", a: "PİLİÇ" },

    // SON (Bayrak) + UÇ (Uçak kalkışı)
    { q: "<i class='fa-solid fa-flag-checkered' style='color:#2c3e50'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-plane-departure' style='color:#34495e'></i>", a: "SONUÇ" },

    { q: "💧 <span class='plus-sign'>+</span> <i class='fa-solid fa-horse' style='color:#d35400'></i>", a: "SUAT" },
    { q: "👑 <span class='plus-sign'>+</span> 💨 <span class='plus-sign'>+</span> 🪖", a: "ŞAHESER" },
    { q: "✊ <span class='plus-sign'>+</span> 🛑", a: "TUTKAL" },

    // UÇ (Uçak) + AK
    { q: "<i class='fa-solid fa-plane-up' style='color:#34495e'></i> <span class='plus-sign'>+</span> ⚪", a: "UÇAK" },

    { q: "🛥️ <span class='plus-sign'>+</span> ⚪", a: "YATAK" },
    { q: "🏹 <span class='plus-sign'>+</span> 🕳️", a: "YAYIN" },
    { q: "💯 <span class='plus-sign'>+</span> 🐑", a: "YÜZME" },

    // ZAR (Zar ikonu) + AR
    { q: "<i class='fa-solid fa-dice' style='color:#e74c3c'></i> <span class='plus-sign'>+</span> AR", a: "ZARAR" },

    { q: "🩸 <span class='plus-sign'>+</span> <i class='fa-solid fa-horse' style='color:#d35400'></i>", a: "KANAT" },
    { q: "🐘 <span class='plus-sign'>+</span> <i class='fa-solid fa-shoe-prints' style='color:#2c3e50'></i>", a: "FİLİZ" },
    { q: "🔋 <span class='plus-sign'>+</span> 🌿", a: "PİLOT" },
    { q: "🍯 <span class='plus-sign'>+</span> K <span class='plus-sign'>+</span> 🔟", a: "BALKON" },
    { q: "Ç <span class='plus-sign'>+</span> <i class='fa-solid fa-horse' style='color:#d35400'></i> <span class='plus-sign'>+</span> 🔴", a: "ÇATAL" },
    { q: "S <span class='plus-sign'>+</span> ⌛ <span class='plus-sign'>+</span> 🔴", a: "SANAL" },
    { q: "K <span class='plus-sign'>+</span> 🔓 <span class='plus-sign'>+</span> ⚪", a: "KAÇAK" },
    { q: "K <span class='plus-sign'>+</span> 🌙 <span class='plus-sign'>+</span> ⚪", a: "KAYAK" },
    { q: "D <span class='plus-sign'>+</span> 🌙 <span class='plus-sign'>+</span> ⚪", a: "DAYAK" },
    { q: "☕ <span class='plus-sign'>+</span> L <span class='plus-sign'>+</span> ⚪", a: "ÇAYLAK" },
    { q: "K <span class='plus-sign'>+</span> 🔟 <span class='plus-sign'>+</span> ⚪", a: "KONAK" },
    { q: "🛑 <span class='plus-sign'>+</span> ⚪", a: "DURAK" },
    { q: "K <span class='plus-sign'>+</span> 💵 <span class='plus-sign'>+</span> ⚪", a: "KURAK" },
    { q: "Y <span class='plus-sign'>+</span> 🥩 <span class='plus-sign'>+</span> 🪖", a: "YETER" },
    { q: "M <span class='plus-sign'>+</span> 🪖 <span class='plus-sign'>+</span> ⚪", a: "MERAK" },
    { q: "Y <span class='plus-sign'>+</span> ⌛ <span class='plus-sign'>+</span> ⚪", a: "YANAK" },
    { q: "🌿 <span class='plus-sign'>+</span> L <span class='plus-sign'>+</span> ⚪", a: "OTLAK" },
    { q: "💧 <span class='plus-sign'>+</span> L <span class='plus-sign'>+</span> ⚪", a: "SULAK" },
    { q: "B <span class='plus-sign'>+</span> 🔴 <span class='plus-sign'>+</span> 🥩", a: "BALET" },
    { q: "⌛ <span class='plus-sign'>+</span> K <span class='plus-sign'>+</span> 🥩", a: "ANKET" },
    { q: " 1️⃣ <span class='plus-sign'>+</span> 📉", a: "BİRAZ" },
    { q: "🩸 <span class='plus-sign'>+</span> 🔴", a: "KANAL" },
    { q: "T <span class='plus-sign'>+</span> 🔴 <span class='plus-sign'>+</span> ⌛", a: "TALAN" },
    { q: "🛶 <span class='plus-sign'>+</span> T <span class='plus-sign'>+</span> ⌛ <span class='plus-sign'>+</span> <i class='fa-solid fa-horse' style='color:#d35400'></i>", a: "SALTANAT" },
    { q: "G <span class='plus-sign'>+</span> 🔴 <span class='plus-sign'>+</span> <i class='fa-solid fa-horse' style='color:#d35400'></i> <span class='plus-sign'>+</span> A", a: "GALATA" },
    { q: "M <span class='plus-sign'>+</span> ⌛ <span class='plus-sign'>+</span> G <span class='plus-sign'>+</span> 🔴", a: "MANGAL" },
    { q: "S <span class='plus-sign'>+</span> ⌛ <span class='plus-sign'>+</span> 🪵", a: "SANDAL" },
    { q: "M <span class='plus-sign'>+</span> ⌛ <span class='plus-sign'>+</span> 🪵", a: "MANDAL" },
    { q: "❄️ <span class='plus-sign'>+</span> T <span class='plus-sign'>+</span> 🔴", a: "KARTAL" },

    // S + İN (Aşağı ok) + Y + AL
    { q: "S <span class='plus-sign'>+</span> <i class='fa-solid fa-arrow-down' style='color:#34495e'></i> <span class='plus-sign'>+</span> Y <span class='plus-sign'>+</span> 🔴", a: "SİNYAL" },

    { q: "🩸 <span class='plus-sign'>+</span> Y <span class='plus-sign'>+</span> 🔟", a: "KANYON" },
    { q: "P <span class='plus-sign'>+</span> ⌛ <span class='plus-sign'>+</span> T <span class='plus-sign'>+</span> 🔴 <span class='plus-sign'>+</span> 🔟", a: "PANTALON" },
    { q: "G <span class='plus-sign'>+</span> 📉 <span class='plus-sign'>+</span> 🥩 <span class='plus-sign'>+</span> E", a: "GAZETE" },
    { q: "❄️ <span class='plus-sign'>+</span> ⚽ <span class='plus-sign'>+</span> U", a: "KARTOPU" },
    { q: "T <span class='plus-sign'>+</span> ⚽ <span class='plus-sign'>+</span> R <span class='plus-sign'>+</span> ⚪", a: "TOPRAK" },
    { q: "H <span class='plus-sign'>+</span> 🌙 <span class='plus-sign'>+</span> R <span class='plus-sign'>+</span> ⌛", a: "HAYRAN" },
    { q: "H <span class='plus-sign'>+</span> 🌙 <span class='plus-sign'>+</span> V <span class='plus-sign'>+</span> ⌛", a: "HAYVAN" },
    { q: "T <span class='plus-sign'>+</span> 🏹 <span class='plus-sign'>+</span> <i class='fa-solid fa-horse' style='color:#d35400'></i>", a: "TOKAT" },
    { q: "H <span class='plus-sign'>+</span> 🗳️ <span class='plus-sign'>+</span> R <span class='plus-sign'>+</span> <i class='fa-solid fa-horse' style='color:#d35400'></i>", a: "HOYRAT" },
    { q: "R <span class='plus-sign'>+</span> 👻 <span class='plus-sign'>+</span> S <span class='plus-sign'>+</span> <i class='fa-solid fa-horse' style='color:#d35400'></i>", a: "RUHSAT" },
    { q: "K <span class='plus-sign'>+</span> 📉 <span class='plus-sign'>+</span> ⌛ <span class='plus-sign'>+</span> Ç", a: "KAZANÇ" },
    { q: "Ş <span class='plus-sign'>+</span> 🪖 <span class='plus-sign'>+</span> B <span class='plus-sign'>+</span> 🥩", a: "ŞERBET" },

    // H + İZ (Ayak izi) + M + ET
    { q: "H <span class='plus-sign'>+</span> <i class='fa-solid fa-shoe-prints' style='color:#2c3e50'></i> <span class='plus-sign'>+</span> M <span class='plus-sign'>+</span> 🥩", a: "HİZMET" },

    { q: "🏠 <span class='plus-sign'>+</span> 🦌 <span class='plus-sign'>+</span> 🌊", a: "EVRENSEL" },
    { q: "🔔 <span class='plus-sign'>+</span> ⚪ <span class='plus-sign'>+</span> 🏰", a: "ÇANAKKALE" },
    { q: "❄️ <span class='plus-sign'>+</span> ⌛ <span class='plus-sign'>+</span> 🐘", a: "KARANFİL" },
    { q: "⚫ <span class='plus-sign'>+</span> 🌊", a: "KARADENİZ" },
    { q: "🌲 <span class='plus-sign'>+</span> K <span class='plus-sign'>+</span> ⚪ <span class='plus-sign'>+</span> ⌛", a: "AĞAÇKAKAN" },

    // GÖK (Bulut) + KUŞ + AĞ + I
    { q: "<i class='fa-solid fa-cloud' style='color:#3498db'></i> <span class='plus-sign'>+</span> 🐦 <span class='plus-sign'>+</span> 🕸️ <span class='plus-sign'>+</span> I", a: "GÖKKUŞAĞI" },

    { q: "<i class='fa-solid fa-cloud' style='color:#3498db'></i> <span class='plus-sign'>+</span> 💯 <span class='plus-sign'>+</span> Ü", a: "GÖKYÜZÜ" },
    { q: "⚫ <span class='plus-sign'>+</span> 🛣️ <span class='plus-sign'>+</span> U", a: "KARAYOLU" },

    // GÖZ + YAŞ (Damla) + I
    { q: "👁️ <span class='plus-sign'>+</span> <i class='fa-solid fa-droplet' style='color:#3498db'></i> <span class='plus-sign'>+</span> I", a: "GÖZYAŞI" },

    { q: "🍯 <span class='plus-sign'>+</span> 🌙 <span class='plus-sign'>+</span> I", a: "BALAYI" },

    // YIL (Takvim) + BAŞ + I
    { q: "<i class='fa-solid fa-calendar-days' style='color:#e74c3c'></i> <span class='plus-sign'>+</span> 👤 <span class='plus-sign'>+</span> I", a: "YILBAŞI" },

    { q: "🥛 <span class='plus-sign'>+</span> 🎵 <span class='plus-sign'>+</span> Ç", a: "SÜTLAÇ" },
    { q: "🌹 <span class='plus-sign'>+</span> 🎵 <span class='plus-sign'>+</span> Ç", a: "GÜLLAÇ" },
    { q: "🌊 <span class='plus-sign'>+</span> 🔴 <span class='plus-sign'>+</span> T <span class='plus-sign'>+</span> I", a: "DENİZALTI" },
    { q: "⚪ <span class='plus-sign'>+</span> S <span class='plus-sign'>+</span> 🔎 <span class='plus-sign'>+</span> Y", a: "AKSARAY" },
    { q: "⬅️ <span class='plus-sign'>+</span> U <span class='plus-sign'>+</span> C <span class='plus-sign'>+</span> ⌛", a: "SOLUCAN" },
    { q: "🏨 <span class='plus-sign'>+</span> I <span class='plus-sign'>+</span> M <span class='plus-sign'>+</span> 🖐️ <span class='plus-sign'>+</span> İ", a: "HANIMELİ" },

    // KART + V + İZ + İT (Köpek)
    { q: "❄️ <span class='plus-sign'>+</span> T <span class='plus-sign'>+</span> V <span class='plus-sign'>+</span> <i class='fa-solid fa-shoe-prints' style='color:#2c3e50'></i> <span class='plus-sign'>+</span> <i class='fa-solid fa-dog' style='color:#d35400'></i>", a: "KARTVİZİT" },

    { q: "❤️ <span class='plus-sign'>+</span> 💵 <span class='plus-sign'>+</span> T <span class='plus-sign'>+</span> 🔎 <span class='plus-sign'>+</span> N", a: "CANKURTARAN" },
    { q: "⌛ <span class='plus-sign'>+</span> A <span class='plus-sign'>+</span> 🎶 <span class='plus-sign'>+</span> L <span class='plus-sign'>+</span> U", a: "ANADOLU" }
];
