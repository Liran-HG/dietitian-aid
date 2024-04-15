
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      device: {
        Row: {
          active: boolean | null
          created_at: string
          data: Json | null
          factory_name: string | null
          id: number
          pretty_name: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          data?: Json | null
          factory_name?: string | null
          id?: number
          pretty_name?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string
          data?: Json | null
          factory_name?: string | null
          id?: number
          pretty_name?: string | null
        }
        Relationships: []
      }
      meeting_summary: {
        Row: {
          created_at: string
          id: number
          meeting_id: number | null
          suggestion: string | null
          text: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          meeting_id?: number | null
          suggestion?: string | null
          text?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          meeting_id?: number | null
          suggestion?: string | null
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_meeting_summary_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["id"]
          },
        ]
      }
      meetings: {
        Row: {
          active: boolean
          created_at: string
          end_time: string | null
          id: number
          location: Database["public"]["Enums"]["meeting_location"] | null
          patient_id: number | null
          start_time: string | null
        }
        Insert: {
          active: boolean
          created_at?: string
          end_time?: string | null
          id?: number
          location?: Database["public"]["Enums"]["meeting_location"] | null
          patient_id?: number | null
          start_time?: string | null
        }
        Update: {
          active?: boolean
          created_at?: string
          end_time?: string | null
          id?: number
          location?: Database["public"]["Enums"]["meeting_location"] | null
          patient_id?: number | null
          start_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_meetings_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      patient_addresses: {
        Row: {
          address: string | null
          created_at: string
          email: string | null
          id: number
          patient_id: number | null
          phone: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          email?: string | null
          id?: number
          patient_id?: number | null
          phone?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          email?: string | null
          id?: number
          patient_id?: number | null
          phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_patient_addresses_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      patient_physique: {
        Row: {
          activity_level: number | null
          created_at: string
          height: number | null
          id: number
          patient_id: number | null
          weight: number | null
        }
        Insert: {
          activity_level?: number | null
          created_at?: string
          height?: number | null
          id?: number
          patient_id?: number | null
          weight?: number | null
        }
        Update: {
          activity_level?: number | null
          created_at?: string
          height?: number | null
          id?: number
          patient_id?: number | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_patient_physique_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          created_at: string
          date_of_birth: string | null
          eng_name: string | null
          first_name: string | null
          gender: Database["public"]["Enums"]["gender"] | null
          id: number
          last_name: string | null
          type: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          date_of_birth?: string | null
          eng_name?: string | null
          first_name?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: number
          last_name?: string | null
          type?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          date_of_birth?: string | null
          eng_name?: string | null
          first_name?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: number
          last_name?: string | null
          type?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      weighing: {
        Row: {
          created_at: string
          data: Json | null
          device_id: number | null
          external_id: number | null
          id: number
          meeting_id: number | null
          patient_id: number | null
          type: Database["public"]["Enums"]["weighing_type"] | null
        }
        Insert: {
          created_at?: string
          data?: Json | null
          device_id?: number | null
          external_id?: number | null
          id?: number
          meeting_id?: number | null
          patient_id?: number | null
          type?: Database["public"]["Enums"]["weighing_type"] | null
        }
        Update: {
          created_at?: string
          data?: Json | null
          device_id?: number | null
          external_id?: number | null
          id?: number
          meeting_id?: number | null
          patient_id?: number | null
          type?: Database["public"]["Enums"]["weighing_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "public_weighing_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "device"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_weighing_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_weighing_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      gender: "Male" | "Female" | "Other" | "Unknown"
      meeting_location:
        | "Office"
        | "ClientHouse"
        | "FreelanceOffice"
        | "FreelanceHouse"
      weighing_type: "Automatic" | "Manual"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
